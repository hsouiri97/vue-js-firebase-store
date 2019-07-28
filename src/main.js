import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';
import 'bootstrap';
import './assets/app.scss';
import {fb} from './firebase';

Vue.config.productionTip = false;

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('Footer',require('./components/Footer.vue').default);
//Vue.component('GetStared', require('./components/GetStarted.vue').default);

let app = '';

fb.auth().onAuthStateChanged((user) => {
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
