import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutViews.vue"),
  },
  {
    path: "/ex1",
    name: "about",

    component: () => import(/* webpackChunkName: "about" */ "../views/ex1.vue"),
  },
  {
    path: "/ex2",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "../views/ex2.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
