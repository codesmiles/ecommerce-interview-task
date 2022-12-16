import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    // 1. Create a state variable to hold the products
    products:[], //IMPORTANT
    cart: [],    
  },
  getters: { 
   },
  mutations: {
    PUSH_PRODUCTS(state, product) { //IMPORTANT WITH THE PRICE MODIFIED
      product.forEach(  p => {
        p.price = Math.round(p.price + ((p.price*2.2)/100)); // 2.2% increase
      });
      state.products = product;
    },
    ADD_PRODUCT(state, productToAdd) {
      state.products.push(productToAdd);
    },
    ADD_TO_CART(state, singleProduct) {
      state.cart.push(singleProduct);
    },
   

  },
  actions: {
    
    FETCH_AND_PUSH_PRODUCT(context, product) { //IMPORTANT
      context.commit('PUSH_PRODUCTS', product);      
    },
    ADD_PRODUCT_ASYNC(context, productToAdd) {
      context.commit('ADD_PRODUCT', productToAdd);
    },
    ADD_TO_CART_ASYNC(context, singleProduct) {
      context.commit('ADD_TO_CART', singleProduct);
    },
    // async fetchUsers({ commit }) {
    //   try {
    //     const d = await axios.get(
    //       "https://fakestoreapi.com/products"
    //     );
    //     commit("SET_PRODUCTS", d.data);
    //   } catch (error) {
    //     alert(error);
    //     console.log(error);
    //   }
    // },

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
