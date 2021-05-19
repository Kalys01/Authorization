import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import dateFilter from '@/filters/date.filter'
// import i18n from './plugins/i18n'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyBlgh5vDLt0yDXN64fB5XqAkGn257SAv3Q",
  authDomain: "client-authorization.firebaseapp.com",
  projectId: "client-authorization",
  storageBucket: "client-authorization.appspot.com",
  messagingSenderId: "636974089077",
  appId: "1:636974089077:web:25521cac2841b881c6c93c",
  measurementId: "G-2YFRS9YZ5W"
})

let app;

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      // i18n,
      render: h => h(App)
    }).$mount('#app')
  }
})
