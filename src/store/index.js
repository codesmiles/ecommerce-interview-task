import { createStore } from 'vuex'

export default createStore({
  state: {
    // 1. Create a state variable to hold the products
    products:null, //IMPORTANT
    profit:[],
    name:"Michael codesmiles",
    age: 30,
    myNumbers: [11, 3, 5, 1, 54, 56]
    
  },
  getters: {
   PRODUCT_WITH_PROFIT(state) { //IMPORTANT
      return state.products.map(product => {
        return {
          ...product,
          price: product.price + (product.price*2.2)/100
        }
      })
    }
  },
  mutations: {
    ADD_NUMBER(state, numberToAdd) {
      state.myNumbers.push(numberToAdd);
    },
    PUSH_PRODUCT(state, product) { //IMPORTANT
      state.products = product;
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
