import { createStore } from 'vuex'

export default createStore({
  state: {
    // 1. Create a state variable to hold the products
    products:[], //IMPORTANT
    cart: [],    
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
    
  },
  actions: {
    FETCH_AND_PUSH_PRODUCT(context, product) { //IMPORTANT
      context.commit('PUSH_PRODUCT', product);
    }
  },
  modules: {
  }
})
