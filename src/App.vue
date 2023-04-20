<template>
  <div>
    <h1>Hello App</h1>
    <div class="main">
      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <router-link class="list-group-class" active-class="active" to="/home"
        >Home</router-link
      >
      <br />
      <router-link class="list-group-class" active-class="active" to="/about"
        >About</router-link
      >
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
.main {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 150px;
  background-color: #f1f1f1;
}

.list-group-class {
  display: block;
  color: #000;
  padding: 8px 12px;
  text-decoration: none;
}

.list-group-class.active {
  background-color: skyblue;
  color: white;
}

.list-group-class:hover {
  background-color: #555;
  color: white;
}
</style>
