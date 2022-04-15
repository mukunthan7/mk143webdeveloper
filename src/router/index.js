import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/skills",
    name: "skills",
    component: () => import("../views/Skills.vue"),
  },
  {
    path: "/technologies",
    name: "technologies",
    component: () => import("../views/Technologies.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
