import Router from "vue-router";
import App from "@/App";
import Vue from "vue";

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

export default router;
