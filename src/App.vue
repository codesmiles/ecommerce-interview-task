<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div class="flex justify-around mt-4">
    <h1 class="text-4xl font-bold uppercase text-center">STARRY COLLECTIONS</h1>
    <div>
      <span
        class="text-2xl font-bold uppercase text-center"
        @click="handleClick"
      >
        Cart
        <span> ({{ cart.length }}) </span>
      </span>
      <div
        v-show="dropdown"
        class="absolute bg-white w-72 rounded-lg shadow-lg p-4"
      >
        <div v-if="cart.length === 0" class="text-center">
          <p class="text-gray-400">No items in cart</p>
        </div>
        <div v-else>
          <div
            v-for="item in cart"
            :key="item.id"
            class="ml-4 mb-4 flex justify-between"
          >
            <p class="text-gray-700 font-bold">
              {{ item.title.substring(0, 18) }}...
            </p>
            <p class="text-gray-400">${{ item.price }}</p>
          </div>
          <router-link to="/cart" class="flex text-blue-500 justify-center font-semibold">See More</router-link>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      dropdown: false,
    };
  },
  computed: {
    ...mapState({
      cart: (state) => state.cart, //IMPORTANT
    }),
  },
  methods: {
    handleClick() {
      this.dropdown = !this.dropdown;
    },
  },
};
</script>
