import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app'

const config = {
  apiKey: "秘密",
  authDomain: "秘密,
  databaseURL: "秘密",
  projectId: "秘密",
  storageBucket: "秘密",
  messagingSenderId: "秘密",
  appId: "秘密",
  measurementId: "秘密"
};

firebase.initializeApp(config);


Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
