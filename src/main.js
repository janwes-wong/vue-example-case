import Vue from 'vue'
import App from './App.vue'
// 引入vue-router
import VueRouter from 'vue-router'
// 引入路由器管理配置
import router from "./router/index";

Vue.config.productionTip = false
// 应用路由器
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')

// vue-router
// 1.安装vue-router路由     npm install vue-router@3
// 2.在src目录下创建router文件夹，创建index.js