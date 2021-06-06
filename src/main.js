import Vue from 'vue'
import Vuelidate from 'vuelidate'
// window.axios = require('axios');
import axios from "@/utils/axios"


import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false


Vue.use(Vuelidate)
// Vue.use(axios)


new Vue({
  router,
  store,
  vuetify,
 
  render: h => h(App)
}).$mount('#app')