// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.min.css';
import 'swiper/dist/js/swiper.min.js';
import animated from 'animate.css'
import axios from "./utils/axios"
Vue.prototype.$http = axios;
Vue.use(ElementUI)
Vue.use(animated)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
