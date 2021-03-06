import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//初始化样式
import './assets/base.css'

// 引入element-ui 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//过滤器
import filters from '@/filter';
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

// 图片懒加载
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad, {
    //   preLoad: 1.3,
    error: require('./assets/images/失败.png'),
    loading: require('./assets/images/等待.gif'),
    //   attempt: 1
});

//字体
import "./assets/iconfont/iconfont.css";
import "./assets/iconfont/iconfont.js";

// 动画
import './assets/animate/animate.css';

// 路由钩子
router.beforeEach((to, from, next) => {
    // 这里准备本页面内部的路由切换不要滚动到头部
    let root = to.path.split("/")[1];
    let children = from.path.split("/")[1];
    if (root !== children) {
        window.scrollTo(0, 0);
    }
    var getData = getLocalStorage("auth_key", 1000 * 60 * 60 * 24 * 7);
    // console.log(getData)
    if (to.meta.login) {
        if (getData != -1) {
            next();
        } else {
            next({
                path: '/',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next();
    }
    // next();
});

//引入发送请求
import axios from 'axios'
Vue.prototype.axios = axios;
import {
    postRequest,
    myRequest,
    elseRequest,
    getRequest,
    uploadFileRequest,
    putRequest,
    deleteRequest
} from './request.js';
Vue.prototype.postRequest = postRequest;
Vue.prototype.myRequest = myRequest;
Vue.prototype.elseRequest = elseRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.uploadFileRequest = uploadFileRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;
// 过期时间
import {
    setLocalStorage,
    getLocalStorage,
    toArr
} from './overtime.js';
Vue.prototype.setLocalStorage = setLocalStorage;
Vue.prototype.getLocalStorage = getLocalStorage;

Vue.config.productionTip = false;

// 微信分享
// import WXconfig from './assets/js/wx.jsapi.js';
// Vue.prototype.WXconfig = WXconfig;

import $ from 'jquery';
Vue.prototype.$ = $;

// import vueJsonp from "vue-jsonp";
// Vue.use(vueJsonp);
// Vue.prototype.Jsonp = 

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')