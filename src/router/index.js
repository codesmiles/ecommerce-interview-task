import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GetProductViewVue from "@/views/GetProductView.vue";
import AddProductVue from "@/views/AddProduct.vue";
import GetOneProductView from "@/views/GetOneProduct.vue";
import Cart from "@/views/Cart.vue";
const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },

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
    path: "/add",
    name: "add-product",
    component: AddProductVue,
  },

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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
