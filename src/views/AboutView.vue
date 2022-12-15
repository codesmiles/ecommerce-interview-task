<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>My name is {{name}}</p>
    <p>My age is {{age}}</p>
    <!-- <p>My products are {{products}}</p> -->
    <!-- <p>My profit is {{profit}}</p> -->
  
  </div>
</template>
<script>
import { mapState,mapGetters } from "vuex";



export default {
  name: "AboutView",
  data() {
    return {
      message: "Hello Vue.js!",
      url:`https://fakestoreapi.com/products`,
    };
  },
  methods: {

  },
  //-------------------------------  IMPORTANT -----------------------------
  mounted() {
    this.axios
      .get(this.url)
      .then((res) => {
      // how to store asynchronous data in actions
      this.$store.dispatch('FETCH_AND_PUSH_PRODUCT',res.data)
      console.log(this.$store.state.products)
      })
      .catch((error) => {
        console.log(error);
      });
  },
  // -----------------------------------------------------------------------
  // computed:  mapState({
  //   name: (state) => state.name,
  //   age: (state) => state.age,
  //   products: (state) => state.products, //IMPORTANT
    
    
  // }),
  computed: {
    ...mapState({
      name: (state) => state.name,
      age: (state) => state.age,
      products: (state) => state.products, //IMPORTANT
    }),
    ...mapGetters({
      ADD_PROFIT: 'ADD_PROFIT',
    }),
  },
};
</script>
