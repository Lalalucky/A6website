import Vue from 'vue'
import Router from 'vue-router'

import Home from "./views/Home/index.vue";
import Login from "./views/LoginAbout/login.vue";
import register from "./views/LoginAbout/register.vue";
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: "Home",
        component: Home
    }]
})