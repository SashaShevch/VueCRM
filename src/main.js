import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import message from "@/utils/message.plugin";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.filter("date", dateFilter);
Vue.use(message);

firebase.initializeApp({
  apiKey: "AIzaSyBbxwg-eBgBLw5AsEnd6E1eyk5hqlPZcCM",
  authDomain: "vue-crm-d6d9c.firebaseapp.com",
  projectId: "vue-crm-d6d9c",
  storageBucket: "vue-crm-d6d9c.appspot.com",
  messagingSenderId: "639940068243",
  appId: "1:639940068243:web:02601284d8dd25e71c1e66",
  measurementId: "G-RFC37G6CJL",
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
