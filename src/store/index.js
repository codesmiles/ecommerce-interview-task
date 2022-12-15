import { createStore } from 'vuex'

export default createStore({
  state: {
    // 1. Create a state variable to hold the products
    products: [], //IMPORTANT
    profit:[],
    name:"Michael codesmiles",
    age: 30,
    myNumbers: [11, 3, 5, 1, 54, 56]
    
  },
  getters: {
    ADD_PROFIT(state) { //IMPORTANT
      state.products.forEach(product => {
        product.price = product.price + (product.price*2.2)/100;
      })
    }
  },
  mutations: {
    ADD_NUMBER(state, numberToAdd) {
      state.myNumbers.push(numberToAdd);
    },
    PUSH_PRODUCT(state, product) { //IMPORTANT
      state.products.push(product);
    },
    
  },
  actions: {
    PUSH_NUMBER(context, numberToAdd) {
      context.commit('ADD_NUMBER', numberToAdd);
    },

    FETCH_AND_PUSH_PRODUCT(context, product) { //IMPORTANT
      context.commit('PUSH_PRODUCT', product);
    }
  },
  modules: {
  }
})
