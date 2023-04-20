<template>
  <div>
    <h4>当前的计算结果：{{ $store.state.sum }}</h4>
    <!-- 通过Vuex的getters -->
    <h4>当前的计算结果增长10倍：{{ $store.getters.growSum }}</h4>
    <!-- 通过vue的计算属性computed -->
    <h4>当前的计算结果增长2倍：{{ growTwoSum }}</h4>
    <!-- 通过Vuex mapGetters辅助函数 -->
    <h4>当前的计算结果增长5倍：{{ growFiveSum }}</h4>
    <p>方式一</p>
    <p>
      姓名:{{ studentNameAlias }} 学号:{{ studentIdAlias }} 性别:{{
        genderAlias
      }}
      住址:{{ addressAlias }}
    </p>
    <p>方式二</p>
    <p>
      姓名:{{ studentName }} 学号:{{ studentId }} 性别:{{ gender }} 住址:{{
        address
      }}
    </p>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment()">+</button>
    <button @click="dincrement()">-</button>
    <button @click="incrementOdd()">计算结果为奇数再次相加</button>
    <button @click="incrementWait()">等待1s后进行计算</button>
  </div>
</template>

<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState mapGetters辅助函数
import { mapState, mapGetters } from "vuex";

export default {
  name: "CalculateCount",
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    // 相加
    increment() {
      this.$store.dispatch("add", this.num);
    },

    // 相减
    dincrement() {
      this.$store.dispatch("subtract", this.num);
    },

    // 计算结果为奇数再次相加
    incrementOdd() {
      if (this.$store.state.sum % 2) {
        this.$store.dispatch("addOdd", this.num);
      }
    },

    // 等待1s后进行计算
    incrementWait() {
      setTimeout(() => {
        this.$store.dispatch("add", this.num);
      }, 1000);
    },
  },
  computed: {
    growTwoSum() {
      return this.$store.getters.growTwoSum;
    },

    /**
     * vue computed原生形式
     */
    /* studentNameAlias() {
      return this.$store.state.studentName;
    },

    studentIdAlias() {
      return this.$store.state.studentId;
    },

    genderAlias() {
      return this.$store.state.gender;
    },

    addressAlias() {
      return this.$store.state.address;
    }, */

    /**
     * 使用mapState辅助函数
     * 对象展开运算符
     * 当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键
     */
    ...mapState({
      studentNameAlias: "studentName",
      studentIdAlias: "studentId",
      genderAlias: "gender",
      addressAlias: "address",
    }),

    /**
     * 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组
     */
    ...mapState(["studentName", "studentId", "gender", "address"]),

    /**
     * mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
     */
    ...mapGetters(["growFiveSum"]),
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>