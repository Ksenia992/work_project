import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async SIGN_IN({ commit, dispatch }, payload) {
      // commit('LOADING', true);
      const response =  await fetch("https://api-shark.herokuapp.com/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
          const data = await response.json();
          console.log(data);
  },
  },
  modules: {
  }
})

