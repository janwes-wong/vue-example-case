<template>
  <div class="right">
    <p>欢迎来到Home页面组件</p>
    <div>
      <ul class="ul-main">
        <li class="li-center">
          <router-link class="li-content" active-class="active" to="/home/news"
            >News</router-link
          >
        </li>
        <li class="li-center">
          <router-link
            class="li-content"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.right {
  position: absolute;
  top: 100px;
  left: 250px;
  width: 300px;
  padding: 10px;
}

.ul-main {
  width: 80%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
}

.li-center {
  float: left;
}

.li-content {
  display: block;
  color: #666;
  text-align: center;
  padding: 15px 20px;
  text-decoration: none;
}

.li-content.active {
  background-color: #4caf50;
  color: white;
}
</style>