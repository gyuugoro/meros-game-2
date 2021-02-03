import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app'

const config = {
  apiKey: "AIzaSyBdvU9aJKzIxTTdizfOdHk46QjwSR0DzGg",
  authDomain: "palami-apps.firebaseapp.com",
  databaseURL: "https://palami-apps.firebaseio.com",
  projectId: "palami-apps",
  storageBucket: "palami-apps.appspot.com",
  messagingSenderId: "1000349405707",
  appId: "1:1000349405707:web:5318ea7f45a0056f93ed0e",
  measurementId: "G-1JY6C6RGSX"
};

firebase.initializeApp(config);


Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
