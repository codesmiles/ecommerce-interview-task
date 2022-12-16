<template>
  <div>
    <h1 class="text-4xl font-bold uppercase text-center">GET PRODUCTS</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="product in products" :key="product.id">
        <div
          class="mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <img
            class="rounded-t-lg h-60 mx-auto"
            :src="product.image"
            alt="product image"
          />

          <div class="p-5">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ product.title }}
            </h5>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ product.description.substring(0,99) }}...<a href="#" class="text-blue-500 font-bold">read more</a>
            </p>
            <div class="capitalize my-3">
              <span class="text-lg font-bold tracking-tight text-gray-900"
                >Category: </span
              >{{ product.category }}
            </div>
            <div class="flex justify-between">
              <p>
                <b class="text-lg font-bold tracking-tight text-gray-900"
                  >Price: </b
                >${{ product.price }}
              </p>
              <div>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                </a>
              </div>
            </div>
          </div>
        </div>

    </div>
    <!-- REFERENCE -->
    <!-- <h2>{{ product.title }}</h2>
    <p>{{ product.price }}</p>
    <p>{{ product.category }}</p>
    <p>{{ product.description }}</p>
    <img :src="product.image" alt="product image" /> -->
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "all-products",
  data() {
    return {
      url: `https://fakestoreapi.com/products`,
    };
  },
  mounted() {
    this.axios
      .get(this.url)
      .then((res) => {
        // how to store asynchronous data in actions
        this.$store.dispatch("FETCH_AND_PUSH_PRODUCT", res.data);
        console.log(this.$store.state.products);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    ...mapState({
      products: (state) => state.products, //IMPORTANT
    })
  },
};
</script>
<style></style>
