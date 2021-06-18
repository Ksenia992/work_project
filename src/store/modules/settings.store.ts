
import VuexPersistence from 'vuex-persist'





const vuexLocal = new VuexPersistence({
    storage: window.localStorage
  })



  const store = {
   
    plugins: [vuexLocal.plugin]
  }


const state = {
 activeColor: '#1AAA8D'
};




const getters = {};

const mutations = {
    SET_COLOR: (state: any, payload:any) => {
        state.activeColor = payload;
        localStorage.setItem('color',payload)
     
      },
  
}

const actions = {
  
    async CHANGE_COLOR({ commit, dispatch }: any, {color}: any) {
      
     

          commit('SET_COLOR', color);
          
     
    
     
  
      },











  }






export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};





