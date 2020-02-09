import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins'

import 'animate.css/animate.min.css'
import 'normalize.css/normalize.css'
import 'reset.css/reset.css'
import './assets/styles/common.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
