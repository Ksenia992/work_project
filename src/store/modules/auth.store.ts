import axios from "@/utils/axios";



const state = {
    isPageLoading:false,
    token: null,
    isLogged: false,
    
};

type AuthState = {
  isPageLoading: boolean;
  token: string | null;
  isLogged: boolean
}

type AuthMethods = {
  commit: (arg: string,arg2:boolean|null) => void
  dispatch:(arg:string, arg2:any) => void

}

type dataSignIn = {
  username:string,
  password:string
}


type dataSignUp = {
  username: string
  email: string,
  password: string,
  password_repeat: string,
}



const getters = {
  // auth(state) {
  //   return state.user
  // }
};

const mutations = {
  TOKEN: (state: AuthState, payload:null) => {
    state.token = payload;
  },
  IS_LOGGED: (state: AuthState, payload:boolean) => {
    state.isLogged = payload;
  },
  LOADING: (state: AuthState, payload:boolean) => {
    state.isPageLoading = payload;
  },
   
};


const actions = {
  async SIGN_IN({ commit, dispatch }: AuthMethods, payload: dataSignIn) {
    commit("LOADING", true);
 
   try {
     const response = await axios.post("/login", payload)
     if (response?.data?.accessToken) {
      localStorage.setItem("token", response.data.accessToken);
      commit('IS_LOGGED', true);
      
 

     }
   } catch (error) {
    console.log("Error");
    console.log(error);
  }
  commit("LOADING", false);
  },

  CHECK_TOKEN({ commit, dispatch }:AuthMethods) {
    const token = localStorage.getItem('token')
    if (token) {
      commit('IS_LOGGED', true);
    }
  },


  
 async SIGN_UP({ commit, dispatch }:AuthMethods, payload:dataSignUp) {
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
  async LOG_OUT({commit, dispatch}:AuthMethods) {
  
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
