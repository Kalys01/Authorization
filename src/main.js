import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import dateFilter from '@/filters/date.filter'
// import i18n from './plugins/i18n'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

var firebaseConfig = {
  apiKey: "AIzaSyBlgh5vDLt0yDXN64fB5XqAkGn257SAv3Q",
  authDomain: "client-authorization.firebaseapp.com",
  projectId: "client-authorization",
  storageBucket: "client-authorization.appspot.com",
  messagingSenderId: "636974089077",
  appId: "1:636974089077:web:25521cac2841b881c6c93c",
  measurementId: "G-2YFRS9YZ5W"
};

new Vue({
  router,
  store,
  // i18n,
  render: h => h(App)
}).$mount('#app')
