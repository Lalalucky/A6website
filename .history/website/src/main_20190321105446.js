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


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
