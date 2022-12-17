<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div class="flex justify-around mt-4">
    <h1 class="text-4xl font-bold uppercase text-center">
        STARRY COLLECTIONS
    </h1>
    <div>
        <router-link to="/cart" class="text-2xl font-bold uppercase text-center">
                Cart
            <span>
                ({{cart.length}})
            </span>
        </router-link>
    </div>
  </div>
  <router-view/>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState({
      cart: (state) => state.cart, //IMPORTANT
    })
  }
}
</script>
