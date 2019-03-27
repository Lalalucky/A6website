import Vue from 'vue'
import Router from 'vue-router'

import Home from "./views/Home/index.vue";
import Login from './views/LoginAbout/login.vue';
import Register from './views/LoginAbout/register.vue';
import Solutions from './views/Solutions/list.vue';
import SolutionsDetial from './views/Solutions/solutionsDetial.vue';
import ProductsIntro from './views/ProductsIntro/index.vue';
import Academe from './views/Academe/index.vue';
import Article from './views/Academe/article'

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
        {
            path: '/productsIntro/index',
            name: 'ProductsIntro',
            component: ProductsIntro,
        },
    ]
})