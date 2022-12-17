<template>
  <div class="flex justify-around py-2 bg-gray-800 text-yellow-50">
    <h1 class="text-4xl font-bold uppercase text-center ">
      STARRY COLLECTIONS
    </h1>
    <div>
      <span
        class="text-2xl font-bold uppercase text-center cursor-pointer relative"
        @click="handleClick"
      >
        Cart
        <span> ({{ cart.length }}) </span>

        <span v-show="!dropdown">&#8681;</span>
        <span v-show="dropdown">&#8679; </span>
      </span>
      <div
        v-show="dropdown"
        class="absolute bg-white w-72 rounded-lg shadow-lg p-4"
      >
        <div v-if="cart.length === 0" class="text-center">
          <p class="text-gray-400">No items in cart</p>
        </div>
        <div v-else>
          <p class="flex justify-center font-light text-red-400 text-xs my-2">
            double click to remove items
          </p>
          <div
            v-for="(item,index) in cart"
            :key="index"
            class="ml-4 mb-4 flex justify-between cursor-pointer"
            @dblclick="removeFromCart(index)"
          >
            <p class="text-gray-700 font-bold">
              {{ item.title.substring(0, 18) }}...
            </p>
            <p class="text-gray-400">${{ item.price }}</p>
          </div>
          <div class="flex text-blue-500 justify-center font-semibold">
            <router-link to="/cart">See More</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
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
    removeFromCart(index) {
      this.$store.commit("REMOVE_FROM_CART", index);
    },
  },
};
</script>
<style></style>
