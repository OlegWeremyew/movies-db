import Vue from "vue";
import App from "./App.vue";
import "./plugins/bootstrap";
import store from "@/store/index.js";
import Router from "vue-router";

Vue.config.productionTip = false;
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: App
    }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
