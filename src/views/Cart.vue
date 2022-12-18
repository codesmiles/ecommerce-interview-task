<template>
    <div>
        <h1 class="uppercase text-4xl font-bold my-5">Your cart</h1>
        <div v-for="(item, index) in cart" :key="index">
            <div class="grid grid-cols-3">
                <p class="text-2xl font-bold uppercase justify-self-center"> {{item.title}}</p>
                <p class="text-2xl font-bold uppercase justify-self-center">$ {{item.price}}</p>
                <p class="text-1xl font-bold uppercase cursor-pointer justify-self-center text-red-400" @click="removeItem(index)">&#10060; remove</p>
            </div>



            <!-- <p>{{item.title}}</p>
            <p>{{item.price}}</p>
            <p>{{item.category}}</p>
            <p>{{item.description}}</p> -->
        </div>
    </div>
</template>
<script>
import { mapState,mapGetters } from "vuex";
export default {
    name: "Cart",
    data() {
        return {
            
        }
    },
    methods: {
        removeItem(index){
            this.$store.commit('REMOVE_FROM_CART', index)
            // console.log(index)
        }
    },
    computed: {
        ...mapState({
            cart: (state) => state.cart,
        }),
    },
}
</script>
<style>
    
</style>