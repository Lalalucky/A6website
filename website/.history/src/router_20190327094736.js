import Vue from 'vue'
import Router from 'vue-router'

import Home from "./views/Home/index.vue";
import Login from './views/LoginAbout/Login.vue';
import Register from './views/LoginAbout/Register.vue';
import Solutions from './views/Solutions/List.vue';
import SolutionsDetial from './views/Solutions/SolutionsDetial.vue';
import ProductsIntro from './views/ProductsIntro/index.vue';

import Top from "@/components/Top.vue";
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name:"Home",
            component: Home,
        },
        {
            path: '/login',
            name: "Login",
            component:Login
        },
        {
            path: '/register',
            name: "Register",
            component: Register
        },
        {
            path: '/solutions/index',
            name: 'solutionIndex',
            component: Solutions,
        },
        {
            path: '/solutions/detial',
            name: 'solutionDetial',
            component: SolutionsDetial,
        },
    ]
})