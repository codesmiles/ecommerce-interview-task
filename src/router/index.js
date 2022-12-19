import { createRouter, createWebHistory } from "vue-router";
import GetProductViewVue from "@/views/GetProductView.vue";
import GetOneProductView from "@/views/GetOneProduct.vue";
import Cart from "@/views/Cart.vue";
import PageNotFoundVue from "@/views/PageNotFound.vue";
// import ModalVue from "@/components/Modal.vue";
const routes = [
  {
    path: "/",
    name: "allProducts",
    props: true,
    component: GetProductViewVue,
  },
  {
    path: "/cart",
    name: "cart",
    // props: true,
    component: Cart,
  },
  // {
  //   path: "/modal",
  //   name: "modal",
  //   props: true,
  //   component: ModalVue,
  // },
  {
    path: "/product/:id",
    name: "singleProduct",
    props: true,
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
