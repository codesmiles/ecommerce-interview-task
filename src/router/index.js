import { createRouter, createWebHistory } from "vue-router";
import GetProductViewVue from "@/views/GetProductView.vue";
import GetOneProductView from "@/views/GetOneProduct.vue";
import Cart from "@/views/Cart.vue";
import PageNotFoundVue from "@/views/PageNotFound.vue";
const routes = [
  {
    path: "/",
    name: "allProducts",
    component: GetProductViewVue,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/product/:id",
    name: "singleProduct",
    component: GetOneProductView
  },
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: PageNotFoundVue,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
