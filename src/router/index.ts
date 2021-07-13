import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainForm from "../views/MainForm.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MainForm",
    component: MainForm,
  },
  {
    path: "/adminpage",
    name: "AdminPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AdminPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
