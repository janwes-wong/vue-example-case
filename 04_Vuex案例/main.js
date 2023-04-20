import Vue from 'vue'
import App from './App.vue'
// 引入store
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

// Vuex
// 1.安装Vuex  npm i vuex@3
// 2.在src目录下创建store文件，创建index.js文件
// 3.引入Vuex
// 4.应用Vuex
