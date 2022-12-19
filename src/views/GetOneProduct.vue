<template>
  <div>
    <!-- MODAL -->
    <!-- <ModalVue
      :title="Notification.title"
      :content="Notification.message"
      :isOpen="Notification.show"
      @toggle="toggleModal"
    /> -->
    <!-- MODAL -->

    <!-- display single product -->
    <div class="max-w-4xl mx-auto my-20">
      <router-link
        :to="{ name: 'allProducts' }"
        class="text-blue-500 hover:text-blue-800 capitalize text-2xl my-4"
        ><span class="text-3xl">&#8678;</span>go back</router-link
      >

      <div class="md:flex md:flex-wrap -mx-4">
        <div class="w-4/5 md:w-1/2 px-4 mb-10 mx-auto">
          <img
            class="w-2/3 h-auto mx-auto"
            :src="singleProduct.image"
            alt="product image"
          />
        </div>
        <div class="text-center md:text-left w-4/5 md:w-1/2 px-4 mb-10 mx-auto">
          <div class="mb-5">
            <h1 class="text-2xl font-semibold mb-2">
              {{ singleProduct.title }}
            </h1>
            <p class="text-gray-600">{{ singleProduct.description }}</p>
          </div>
          <div class="mb-5">
            <h1 class="text-2xl font-semibold mb-2">
              Price: ${{ singleProduct.price }}
            </h1>
          </div>
          <div class="mb-5">
            <h1 class="text-2xl font-semibold mb-2 capitalize">
              category: {{ singleProduct.category }}
            </h1>
          </div>
          <div class="mb-5">
            <button
              class="w-full py-3 px-4 bg-gray-800 text-gray-100 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              @click="handleCart(singleProduct.id)"
            >
              Add to cart
            </button>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
// import ModalVue from "../components/Modal.vue";

export default {
  name: "GetOneProduct",
  // components: {
  //   ModalVue,
  // },
  data() {
    return {
      singleProduct: {},
    };
  },
  computed: {
    ...mapState({
      products: (state) => state.products, //IMPORTANT
      Notification: (state) => state.Notification,
    }),
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      const id = this.$route.params.id;
      const productData = this.products.filter((product) => product.id == id);
      this.singleProduct = productData[0];
    },
    handleCart(productId) {
      this.$store.commit("ADD_TO_CART", productId);
    },
    // toggleModal() {
    //   this.Notification.show = !this.Notification.show;
    // },
  },
};
</script>
