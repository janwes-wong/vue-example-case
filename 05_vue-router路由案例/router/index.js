/**
 * 路由器配置
 */
// 引入vue-router
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from "../pages/News.vue";
import Message from '../pages/Message.vue';


export default new VueRouter({
    routes:[
        {
            path:"/about",
            component:About
        },
        {
            path:"/home",
            component:Home,
            // 嵌套路由
            children:[
                {
                    path:"news",
                    component:News
                },
                {
                    path:"message",
                    component:Message
                }
            ]
        }
    ]
})