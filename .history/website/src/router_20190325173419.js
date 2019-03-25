import Vue from 'vue'
import Router from 'vue-router'

import Home from "./views/Home/index.vue";
import Login from "./views/LoginAbout/Login.vue";
import Register from "./views/LoginAbout/Register.vue";
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        component: Home,
    }]
})