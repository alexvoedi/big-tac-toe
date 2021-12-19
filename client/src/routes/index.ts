import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Start",
    component: () => import("@/views/Start/index.vue"),
  },
  {
    path: "/lobby",
    name: "Lobby",
    component: () => import("@/views/Lobby/index.vue"),
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("@/views/Game/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
