const state = {
   
  };
  
  const getters = {};
  
  const mutations = {

  };
  
  const actions = {
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
    async SIGN_UP({ commit, dispatch }, payload) {
      // commit('LOADING', true);
      const response =  await fetch("https://api-shark.herokuapp.com/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
          const data = await response.json();
          console.log(data);
  },
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };