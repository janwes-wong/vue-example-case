/**
 * Vuex文件
 */

// 引入Vue
import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";
// 应用Vuex插件
Vue.use(Vuex)

// Vuex的actions组件 ---> 用于响应组件中的动作
const actions = {
    // context：上下文  value：传递的值
    add(context,value) {
        console.log("===> actions组件的add方法被调用了......")
        context.commit("ADD",value)
    },

    subtract(context,value) {
        console.log("===> actions组件的subtract方法被调用了......")
        context.commit("SUNBTRACT",value)
    },

    addOdd(context,value) {
        console.log("===> actions组件的addOdd方法被调用了......")
        context.commit("ADDODD",value)
    }
}

// Vuex的mutations组件 ---> 用于操作组件中的数据
const mutations = {
    ADD(state,value) {
        console.log("===> mutations组件的ADD方法被调用了......")
        state.sum += value
    },

    SUNBTRACT(state,value) {
        console.log("===> mutations组件的SUNBTRACT方法被调用了......")
        state.sum -= value
    },

    ADDODD(state,value) {
        console.log("===> mutations组件的ADDODD方法被调用了......")
        state.sum += value
    },
}

// Vuex getters
const getters = {
    growSum(state) {
        return state.sum * 10
    },

    growTwoSum() {
        return state.sum * 2
    },

    growFiveSum() {
        return state.sum * 5
    }
}

// Vuex的state组件 ---> 用于存储组件中的数据
const state = {
    sum:0,
    studentName:"张三",
    studentId:"SZ00253200",
    gender:"男",
    address:"广东省深圳市"
}

// 创建并导出store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})