import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/pacman",
    name: "pacman",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Pacman.vue"),
  },
  {
    path: "/anyThingPage",
    name: "anyThingPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AnyThingPage.vue"),
  },
  {
    path: "/spade",
    name: "spade",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Spade.vue"),
  },
  {
    path: "/clone",
    name: "clone",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/cloneCode.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
