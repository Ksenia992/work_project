import axios from "@/utils/axios";
import storage from "@/utils/storage";
const state = {
  token: null,
};

const getters = {};

const mutations = {};

const actions = {
  async SIGN_IN({ commit, dispatch }, payload) {
    axios
      .post("/login", payload)
      .then((response) => {
        // console.log(response.data)
        // console.log(payload)
        // console.log(response.headers)
        console.log(response.data.accessToken)

        localStorage.set("token", response.data.accessToken);
      })
      .catch((error) => {
        console.log(error);
      });

    // const response =  await fetch("https://api-shark.herokuapp.com/login", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(payload),
    //     });
    //     const data = await response.json();
    //     console.log(data);
  },
  async SIGN_UP({ commit, dispatch }, payload) {
    axios
      .post("/signup", payload)
      .then((response) => {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });

    // const response =  await fetch("https://api-shark.herokuapp.com/signup", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(payload),
    //     });
    //     const data = await response.json();
    //     console.log(data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
