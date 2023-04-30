import Router from "vue-router";
import Home from "@/view/Home";
import Vue from "vue";
import NotFoundPage from "@/view/NotFoundPage";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFoundPAge",
      component: NotFoundPage
    }
  ]
});

export default router;
