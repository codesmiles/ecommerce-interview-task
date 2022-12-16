<template>
    <div>
        <!-- <h1 class="">Cart</h1>
        <div v-for="(item, index) in cart" :key="index">
            <p>{{item.title}}</p>
            <p>{{item.price}}</p>
            <p>{{item.category}}</p>
            <p>{{item.description}}</p>
        </div> -->
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