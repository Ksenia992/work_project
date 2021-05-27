import axios from "@/utils/axios";
import storage from "@/utils/storage";

const state = {
  user:{
  token: null,
  isLogged: false
  }
};

const getters = {};

const mutations = {
  TOKEN: (state, payload) => {
    state.user.token = payload;
  },
  IS_LOGGED: (state, payload) => {
    state.user.isLogged = payload;
  },
};


const actions = {
  async SIGN_IN({ commit, dispatch }, payload) {
   
   try {
     const response = await axios.post("/login", payload)
     if(response?.data?.accessToken) {
      localStorage.set("token", response.data.accessToken);
     }
   } catch (error) {
    console.log("Error");
    console.log(error);
  }
   
    // axios
    //   .post("/login", payload)
    //   .then((response) => {
    //     // console.log(response.data)
    //     // console.log(payload)
    //     // console.log(response.headers)
    //     console.log(response.data.accessToken)

    //     localStorage.set("token", response.data.accessToken);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

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
    
   try {
     const response = await axios.post("/signup", payload)
    
   } 
  catch (error) {
    console.log('Error')
    console.log(error)
  }
  


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
  async LOG_OUT({commit, dispatch}, payload) {
   
      commit('TOKEN', null);
      // commit('LOGOUT', null);
      commit('IS_LOGGED', false);
      localStorage.removeItem('token');
  
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
