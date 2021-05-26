const state = {
  tenants: [],
  isTenantsLoading: false,
};

const getters = {};

const mutations = {
  LOADING: (state, payload) => {
    state.isTenantsLoading = payload;
  },
};

const actions = {
  async GET_TENANTS({ commit, dispatch }, payload) {
    commit("LOADING", true);

    axios({
      method: "get",
      url: "https://api-shark.herokuapp.com/tenants",

      data: payload,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(function(response) {
          console.log('Success')
        console.log(response.data);
      })
      .catch(function(error) {
          console.log('Error')
        console.log(error);
      });

    commit("LOADING", false);
  },
  //   async Sdsdsdsdsdsds({ commit, dispatch }, payload) {

  //     axios({
  //       method: 'post',
  //       url: 'https://api-shark.herokuapp.com/tenants',

  //       data: payload,
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8"
  //       }
  //     })
  //     .then(function(response) {

  //       console.log(response.data);
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });

  // },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
