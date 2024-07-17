import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home/index.vue")
    },
    {
      path: "/about",
      component: () => import("@/views/About/index.vue")
    }
  ]
});
