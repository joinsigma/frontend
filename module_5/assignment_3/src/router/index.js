import { createRouter, createWebHistory } from "vue-router";

import Index from "@/views/Index.vue";
import Product from "@/views/Product.vue";
import Settings from "@/views/Settings.vue";

const routes = [
  { path: "/", component: Index },
  { path: "/product", component: Product },
  { path: "/settings", component: Settings },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
