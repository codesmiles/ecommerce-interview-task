<template>
  <div>
    <!-- MODAL -->
    <!-- <Modal
      :title="Notification.title"
      :content="Notification.message"
      :isOpen="Notification.show"
      @toggle="toggleModal"
    /> -->
    <!-- MODAL -->

    <div class="w-4/5 mx-auto">
      <input
        type="text"
        placeholder="Search By Title"
        v-model="search"
        @input="searchProducts"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-4"
      />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="product in products" :key="product.id">
        <div
          class="py-2 mx-auto max-w-sm bg-white borde r border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <img
            class="rounded-t-lg h-60 mx-auto"
            :src="product.image"
            alt="product image"
          />

          <div class="p-5">
            <h5
              class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ product.title }}
            </h5>

            <p
              class="mb-3 font-normal text-gray-700 dark:text-gray-400 capitalize"
            >
              {{ product.description.substring(0, 99) }}...<router-link
                :to="{ name: 'singleProduct', params: { id: product.id } }"
                class="text-blue-500 font-bold"
                >read more</router-link
              >
            </p>
            <div class="flex items-center my-2.5">
              <span class="text-lg font-bold tracking-tight text-gray-700 dark:text-white">
                Rating:
              </span>
              <svg
                v-for="index in Math.round(product.rating.rate)"
                :key="index"
                aria-hidden="true"
                class="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">{{
                product.rating.rate
              }}</span>
            </div>
            <div class="capitalize my-3">
              <span class="text-lg font-bold tracking-tight text-gray-700 dark:text-white"
                >Category: </span
              >{{ product.category }}
            </div>

            <div class="flex justify-between">
              <p>
                <b class="text-lg font-bold tracking-tight text-gray-700 dark:text-white"
                  >Price: </b
                >${{ product.price }}
              </p>
              <div>
                <button
                  class="pointer-cursor inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  @click.prevent="handleCart(product.id)"
                >
                  <span>Add To Cart</span>
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { ref } from "vue";
// import Modal from "@/components/Modal.vue";

export default {
  name: "all-products",
  // components: { Modal },
  data() {
    return {
      url: `https://fakestoreapi.com/products`,
      search: ref(""),
    };
  },
  mounted() {
    this.axios
      .get(this.url)
      .then((res) => {
        // how to store asynchronous data in actions
        this.$store.dispatch("FETCH_AND_PUSH_PRODUCT", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    handleCart(productId) {
      this.$store.commit("ADD_TO_CART", productId);
      
      // this.$router.push("/cart");
    },
    searchProducts() {
      this.$store.commit("SEARCH_PRODUCTS", this.search);
    },
    // toggleModal() {
    //   this.Notification.show = !this.Notification.show;
    // },
  },
  computed: {
    ...mapState({
      products: (state) => state.products, //IMPORTANT
      Notification: (state) => state.Notification,
    }),
  },
};
</script>
<style></style>
