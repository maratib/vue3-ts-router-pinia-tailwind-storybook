import { createRouter, createWebHashHistory } from "vue-router";

interface RoutesType {
  path: string;
  name: string;
  component: () => {};
  meta?: {
    index?: number;
    layout?: string;
    keepAlive?: boolean;
  };
  children?: RoutesType[];
}

const routes: RoutesType[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
    meta: {
      layout: "app",
    },
  },
  {
    path: "/admin/",
    name: "Dashboard",
    component: () => import("@/views/admin/Dashboard.vue"),
    meta: {
      layout: "admin",
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
