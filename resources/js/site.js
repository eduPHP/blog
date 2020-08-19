require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import routes from './routes/site'
import Vuex from 'vuex'
import store from './store/site'
import Site from './Site'

Vue.use(VueMeta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid',
  refreshOnceOnNavigation: true
})
Vue.use(Vuex)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  store: new Vuex.Store(store),
  router: new VueRouter(routes),
  render: h => h(Site)
})