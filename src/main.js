import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap-icons/bootstrap-icons.svg'
import 'bootstrap/dist/js/bootstrap.bundle'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
