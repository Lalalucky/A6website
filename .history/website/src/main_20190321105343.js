import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//初始化样式
import './assets/base.css'

// 引入element-ui 
import Element

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
