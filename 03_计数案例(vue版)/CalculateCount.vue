<template>
  <div>
    <h4>计算后的结果：{{ sum }}</h4>
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
export default {
  name: "CalculateCount",
  data() {
    return {
      sum: 0,
      num: 1,
    };
  },
  methods: {
    // 相加
    increment() {
      this.sum += this.num;
    },

    // 相减
    dincrement() {
      this.sum -= this.num;
    },

    // 计算结果为奇数再次相加
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += this.num;
      }
    },

    // 等待1s后进行计算
    incrementWait() {
      setTimeout(() => {
        this.sum += this.num;
      }, 1000);
    },
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>