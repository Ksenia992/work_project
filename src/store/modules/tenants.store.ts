import axios from "@/utils/axios";


const state = {
  tenants: [],
  isTenantsLoading: false,
};
type TenantsState = {
  isTenantsLoading: boolean;
  tenants:string[]
}

type TenantMethods = {
  commit: (arg: string,arg2:boolean) => void
  dispatch:any

}


const getters = {};

const mutations = {
  LOADING: (state:TenantsState, payload:any) => {
    state.isTenantsLoading = payload;
  },
  SET_TENANTS: (state:TenantsState, payload:any) => {
    state.tenants = payload;
  },
};

const actions = {
  async GET_TENANTS({ commit, dispatch }:TenantMethods, payload:any) {
    commit("LOADING", true);

    try {
      const { data } = await axios.get("/tenants");
      if (data && data.tenants && Array.isArray(data.tenants)) {
        commit("SET_TENANTS", data.tenants ?? []);
      }
    } catch (error) {
      console.log("Error");
      console.log(error);
    }



    commit("LOADING", false);
  },
  async ADD_TENANTS({ commit, dispatch }:TenantMethods, payload:any) {
    commit("LOADING", true);

    try {
      const response = await axios.post("/tenants",payload);
    
    } catch (error) {
      console.log("Error");
      console.log(error);
    }



    commit("LOADING", false);
  },
 
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
