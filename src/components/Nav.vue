<template>
  <div
    class="flex justify-around py-2 bg-gray-800 text-yellow-50 sticky top-0 w-full"
  >
    <router-link to="/">
      <h1 class="md:text-4xl text-lg font-bold uppercase text-center">
        STARRY COLLECTIONS
      </h1>
    </router-link>


    <div class="">
      <span
        class="text-2xl font-bold uppercase text-center cursor-pointer"
        @click="handleClick"
      >
        <span class="hidden md:inline"> Cart </span>
        <span> ({{ cart.length }}) </span>

        <span v-show="!dropdown">&#8681;</span>
        <span v-show="dropdown">&#8679; </span>
      </span>
      <!--                                  DROPDOWN MENU START                                          -->
      <!-- transition -->
            <transition
            enter-active-class="duration-300 ease-out"
            enter-from-class="transform opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="transform opacity-0"
          >
      <div @click.self="handleClick" v-show="dropdown" :class="overlay">
        <div
          class="absolute bg-white w-64 rounded-lg shadow-lg p-4 top-14 right-5"
          v-show="dropdown"
        >
          
          
            <p v-if="cart.length === 0" class="text-gray-400 text-center">
              No items in cart
            </p>
          

          
          <div v-if="cart.length > 0">
            <p class="flex justify-center font-light text-red-400 text-xs my-2">
              double click/tap to remove items
            </p>

            <div
              v-for="(item, index) in cart"
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
    </transition>
    <!-- transition -->
      <!--                            DROPDOWN MENU END                                               -->
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
      overlay: " w-screen h-screen fixed left-0 top-0 z-10",
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
    // custom event
  },
};
</script>
<style></style>
