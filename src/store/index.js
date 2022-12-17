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
    ADD_TO_CART(state, singleProduct) {
      const singleItem = state.products.filter(item=>item.id === singleProduct)
      state.cart.push(singleItem[0]);
      console.log(state.cart);
    },
    SEARCH_PRODUCTS(state, search) {
      state.products = state.products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
      if(search === '' || state.products.length === 0) {
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
          state.products = response.data;
        })
      }
      else {
        return state.products;
      }
      
      }
  },
  actions: {
    
    FETCH_AND_PUSH_PRODUCT(context, product) { //IMPORTANT
      context.commit('PUSH_PRODUCTS', product);      
    },
  },
  modules: {
  }
})
