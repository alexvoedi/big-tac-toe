import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Root",
    component: () => import("@/views/TheRoot.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
