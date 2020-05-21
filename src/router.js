import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件

import login from './components/Login.vue'
import register from './components/Register.vue'
import index from './components/Index.vue'
import my from './components/My.vue'
import add from './components/Add.vue'
import issue from './components/Issue.vue'
import my_issue from './components/MyIssue.vue'
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/login",
        component: login
    },
    {
        path: "/register",
        component: register
    },{
        path: "/index",
        component: index
    },{
        path: "/my",
        component: my
    },{
        path: "/add",
        component: add
    },{
        path: "/issue",
        component: issue
    },{
        path: "/my_issue",
        component: my_issue
    }, {
      path: '/', 
      redirect: '/login' 
  }
]

var router =  new VueRouter({
    routes
})
export default router;