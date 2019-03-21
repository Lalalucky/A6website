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
import filter from '@/filter';
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 图片懒加载
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad
  , {
    //   preLoad: 1.3,
    error: require('./assets/images/失败.png'),
    loading: require('./assets/images/等待.gif'),
    //   attempt: 1
  }
);

//字体
import "./assets/iconfont/iconfont.css";
import "./assets/iconfont/iconfont.js";

// 动画
import './assets/animate/animate.css';

// 路由钩子
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
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



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
