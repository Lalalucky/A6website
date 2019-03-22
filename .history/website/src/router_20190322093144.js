import Vue from 'vue'
import Router from 'vue-router'

import Home from "./views/Home/index.vue";

import Top from "@/components/Top.vue";
import Banner from "@/components/Banner.vue";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: "Home",
        component: Home,
        children: [
            
        ]
    }]
})