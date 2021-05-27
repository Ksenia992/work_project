import axios from "@/utils/axios";
import storage from "@/utils/storage";

const state = {
  tenants: [],
  isTenantsLoading: false,
};

const getters = {};

const mutations = {
  LOADING: (state, payload) => {
    state.isTenantsLoading = payload;
  },
  SET_TENANTS: (state, payload) => {
    state.tenants = payload
  }
  
};

const actions = {
  async GET_TENANTS({ commit, dispatch }, payload) {
    commit("LOADING", true);

    axios
      .get("/tenants")
      .then(({ data }) => {
        console.log("Success");
        // console.log(data);
        if(data && data.tenants && Array.isArray(data.tenants)) {
          commit("SET_TENANTS", data.tenants ?? [])
        } 
      })
      .catch((error) => {
        console.log("Error");
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
