import axios from "@/utils/axios";



const state = {
    isPageLoading:false,
    token: null,
  isLogged: false,
  

};

const getters = {
  // auth(state) {
  //   return state.user
  // }
};

const mutations = {
  TOKEN: (state, payload) => {
    state.token = payload;
  },
  IS_LOGGED: (state, payload) => {
    state.isLogged = payload;
  },
  LOADING: (state, payload) => {
    state.isPageLoading = payload;
  },
};


const actions = {
  async SIGN_IN({ commit, dispatch }, payload) {
    commit("LOADING", true);
 
   try {
     const response = await axios.post("/login", payload)
     if (response?.data?.accessToken) {
      localStorage.setItem("token", response.data.accessToken);
      commit('IS_LOGGED', true);
      
      // this.$router.push("/")

     }
   } catch (error) {
    console.log("Error");
    console.log(error);
  }
  commit("LOADING", false);
  },

  CHECK_TOKEN({ commit, dispatch }, payload) {
    const token = localStorage.getItem('token')
    if (token) {
      commit('IS_LOGGED', true);
    }
  },


  
 async SIGN_UP({ commit, dispatch }, payload) {
  commit("LOADING", true);
    
   try {
     const response = await axios.post("/signup", payload)
     commit('IS_LOGGED', true);
    
   } 
  catch (error) {
    console.log('Error')
    console.log(error)
  }
  commit("LOADING", false);
  


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
   
      localStorage.removeItem('token');
      commit('IS_LOGGED', false);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
