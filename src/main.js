import Vue from 'vue'
import App from './App'
import './assets/normalize.css'
import './assets/style.css'
import store from './store'
import VueMask from 'v-mask'
Vue.config.productionTip = false
Vue.use(VueMask)
new Vue({
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
