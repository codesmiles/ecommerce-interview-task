<template>
  <div>
    <router-link
      :to="{ name: 'allProducts' }"
      class="text-blue-500 hover:text-blue-800 capitalize text-2xl my-4"
      ><span class="text-3xl">&#8678;</span>go back</router-link
    >
    <h1 class="uppercase text-4xl font-bold my-5">Your cart</h1>
    <div v-if="cart.length === 0" class="text-center">
      <p class="text-gray-400">No items in cart</p>
    </div>
    <div v-for="(item, index) in cart" :key="index">
      <div class="grid grid-cols-3">
        <p class="text-2xl font-bold uppercase justify-self-center">
          {{ item.title }}
        </p>
        <p class="text-2xl font-bold uppercase justify-self-center">
          $ {{ item.price }}
        </p>
        <p
          class="text-1xl font-bold uppercase cursor-pointer justify-self-center text-red-400"
          @click="removeItem(index)"
        >
          &#10060; remove
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Cart",
  data() {
    return {};
  },
  methods: {
    removeItem(index) {
      this.$store.commit("REMOVE_FROM_CART", index);
      // console.log(index)
    },
  },
  computed: {
    ...mapState({
      cart: (state) => state.cart,
      
    }),
  },
};
</script>
<style></style>
