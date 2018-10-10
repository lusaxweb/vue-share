import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './vars.styl'
import './responsive.styl'
import 'material-design-icons/iconfont/material-icons.css'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAkVX-nNwsbwsj1-f0LVGbhmjFz_GjU6Tc',
  authDomain: 'vuejsnews-app.firebaseapp.com',
  databaseURL: 'https://vuejsnews-app.firebaseio.com',
  projectId: 'vuejsnews-app',
  storageBucket: 'vuejsnews-app.appspot.com',
  messagingSenderId: '800699392189'
}
firebase.initializeApp(config)

Vue.prototype.$firebase = firebase

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
