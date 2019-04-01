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

//首页下面的组件
import Business from "./views/home/business.vue";
import Controls from "./views/home/controls.vue";
import Education from "./views/home/education.vue";
import Marketing from "./views/home/marketing.vue";
import Sell from "./views/home/sell.vue";
import Source from "./views/home/source.vue";

import Top from "@/components/top.vue";
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/homes',
            redirect: Home,
        },
        {
            path: '/home',
            name: "Home",
            component: Home,
            children: [
                {
                    path: '/home/bussiness',
                    redirect: Business
                },
                {
                    path: '/home/bussiness',
                    name: 'Bussiness',
                    component: Business
                },
                {
                    path: '/home/controls',
                    name: 'Controls',
                    component: Controls
                },
                {
                    path: '/home/education',
                    name: 'Education',
                    component: Education
                },
                {
                    path: '/home/marketing',
                    name: 'Marketing',
                    component: Marketing
                },
                {
                    path: '/home/sell',
                    name: 'sell',
                    component: Sell
                },
                {
                    path: '/home/source',
                    name: 'source',
                    component: Source
                },
            ]
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