import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    // 1. Create a state variable to hold the products
    products:[], //IMPORTANT
    cart: [],    
    // productsFetched:[]
  },
  getters: {  },
  mutations: {

    PUSH_PRODUCT(state, product) { //IMPORTANT WITH THE PRICE MODIFIED
      product.forEach(  p => {
        p.price = Math.round(p.price + ((p.price*2.2)/100)); // 2.2% increase
      });
      state.products.push(...product);
    },
    ADD_PRODUCT(state, productToAdd) {
      state.products.push(productToAdd);
    },
    
    ADD_PRODUCT_ASYNC(state, productToAdd) {
      state. productsFetched.push(productToAdd);
    }
    
  },
  actions: {
    FETCH_AND_PUSH_PRODUCT(context, product) { //IMPORTANT
      context.commit('PUSH_PRODUCT', product);
      // --------------TO BE CONTINUED-----------------
      // axios.get('https://fakestoreapi.com/products')
      // .then((res) => {
      //   // how to store asynchronous data in actions
      //   context.commit('PUSH_PRODUCT', res.data);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
      // -----------------------------------------------
    },
    ADD_PRODUCT_ASYNC(context, productToAdd) {
      context.commit('ADD_PRODUCT', productToAdd);
    },

    // FETCH_PRODUCT(context) { //IMPORTANT
    //   axios.get('https://fakestoreapi.com/products')
    //   .then(response => {
    //     context.commit('ADD_PRODUCT_ASYNC', response.data);
    //   })
    // }
  },
  modules: {
  }
})
