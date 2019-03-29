import Vue from 'vue'
import Router from 'vue-router'

import Home from "./views/home/index.vue";
import Login from './views/loginAbout/login.vue';
import Register from './views/loginAbout/register.vue';
import Solutions from './views/solutions/list.vue';
import SolutionsDetial from './views/solutions/solutionsDetial.vue';
import ProductsIntro from './views/productsIntro/index.vue';
import Academe from './views/academe/index.vue';
import Article from './views/academe/article';
import Coopration from './views/cooperation/index.vue';
import Service from './views/server/inedx.vue';
import ContactUs from './views/contactUs/index.vue';

import Top from "@/components/top.vue";
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: "Home",
            component: Home,
        },
        {
            path: '/login',
            name: "Login",
            component: Login
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
        {
            path: '/academe/index',
            name: 'Academe',
            component: Academe,
        },
        {
            path: '/academe/article',
            name: 'Article',
            component: Article,
        },
        {
            path: '/cooprations/index',
            name: 'coopration',
            component: Coopration
        },
        {
            path: '/server/index',
            name: 'server',
            component: Service
        },
        {
            path: '/contactUs/index',
            name: 'contactUs',
            component: ContactUs
        }
    ]
})