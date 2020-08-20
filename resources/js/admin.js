require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes/admin'
import Vuex from 'vuex'
import store from './store/admin'
import Admin from './Admin'

Vue.use(Vuex)
Vue.use(VueRouter)
window.Vue = Vue

new Vue({
  el: '#app',
  store: new Vuex.Store(store),
  router: new VueRouter(routes),
  render: h => h(Admin)
})