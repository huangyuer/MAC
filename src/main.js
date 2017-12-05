// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* jshint esversion: 6 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueParticles from 'vue-particles'

import { Pagination } from 'element-ui'
Vue.use(Pagination)

import { AUTH_TOKEN } from './assets/js/config'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont'

// 全局配置axios
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.common.Authorization = AUTH_TOKEN

// axios.defaults.baseURL = 'http://localhost:9988/v1/'

Vue.config.productionTip = false
// Vue.prototype.$axios = axios
Vue.http = axios

router.beforeEach((to, from, next) => {
  if (to.matched.length < 1) {
    next('/lost')
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
