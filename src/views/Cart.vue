<template>
  <div>
    <!-- MODAL -->
    <ModalCompVue
      :title="Notification.title"
      :content="Notification.message"
      :isOpen="Notification.show"
      @toggle="toggleModal"
    />
    <!-- MODAL -->
    <div class="w-4/5 mx-auto my-4">
      <router-link
        :to="{ name: 'allProducts' }"
        class="text-blue-500 hover:text-blue-800 capitalize text-2xl"
        ><span class="text-3xl">&#8678;</span>go back</router-link
      >
      <h1 class="uppercase text-4xl font-bold my-5">Your cart</h1>
    </div>
    <div v-if="cart.length === 0" class="text-center">
      <p class="text-gray-400">No items in cart</p>
    </div>
    <div v-for="(item, index) in cart" :key="index" class="w-4/5 mx-auto">
      <div class="grid grid-cols-3">
        <p class="text-normal font-bold">
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
import { mapState } from "vuex";
import ModalCompVue from "../components/ModalComp.vue";
export default {
  name: "Cart",
  components: {
    ModalCompVue,
  },
  data() {
    return {};
  },
  methods: {
    removeItem(index) {
      this.$store.commit("REMOVE_FROM_CART", index);
    },
    toggleModal() {
      this.Notification.show = !this.Notification.show;
    },
  },
  computed: {
    ...mapState({
      cart: (state) => state.cart,
      Notification: (state) => state.Notification,
    }),
  },
};
</script>
<style></style>
