import { createRouter, createWebHistory } from "vue-router";
import GetProductViewVue from "@/views/GetProductView.vue";
import AddProductVue from "@/views/AddProduct.vue";
import GetOneProductView from "@/views/GetOneProduct.vue";
import Cart from "@/views/Cart.vue";
import modal from "@/components/modal.vue";
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
  // {
  //   path: "/add",
  //   name: "add-product",
  //   component: AddProductVue,
  // },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/product/:id",
    name: "singleProduct",
    component: GetOneProductView
  },
  {
    name: "modal",
    path: "/modal",
    component: modal,
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
