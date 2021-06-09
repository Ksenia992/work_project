import axios from "@/utils/axios";


const state = {
  tenants: [],
  isTenantsLoading: false,
  tenantById:null,
  errorInTenant:false
};
type TenantsState = {
  isTenantsLoading: boolean;
  tenants:string[]
  tenantById:any,
  errorInTenant:boolean
};

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
  SET_ACTIVE_TENANT: (state:TenantsState, data:any) => {
    state.tenantById = data 
  },
  SET_ERROR:(state:TenantsState, bool:boolean) => {
    state.errorInTenant = bool
},
ADD_TENANT:(state:TenantsState, payload:any) => {
  state.tenants.push(payload)
  }
}

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

  async GET_TENANTS_PERPAGE({ commit, dispatch }:TenantMethods, payload:any) {
    commit("LOADING", true);

    try {
      const { data } = await axios.get("/tenants?", { params: { page: newVal } });
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
    commit ('ADD_TENANT', payload)

    try {
      const response = await axios.post("/tenants",payload);
    
    } catch (error) {
      console.log("Error");
      console.log(error);
    }



    commit("LOADING", false);
  },


  async GET_TENANT_BYID ({ commit, dispatch }:TenantMethods,{tenantId}:any) {
    commit("SET_ERROR", false);
    commit("LOADING", true);
    try {
      const { data } = await axios.get(`/tenants/${tenantId}`);
      if (data ) {
        commit("SET_ACTIVE_TENANT", data);
      }
      console.log(data)
     console.log(state.tenantById)
    
    } catch (error) {
      console.log("Error");
      console.log(error);
      commit("SET_ERROR", true);

    }  
    commit("LOADING", false);
  },
  async EDIT_TENANT  ({ commit, dispatch }:TenantMethods,{tenantId, tenant }:any) {
    commit("LOADING", true);
    try {
      const { data } = await axios.put(`/tenants/${tenantId}`, tenant);
      if (data ) {
        commit("SET_ACTIVE_TENANT", data);
      }
      console.log(data)
     console.log(state.tenantById)
    
    } catch (error) {
      console.log("Error");
      console.log(error);
     

    } 
    commit("LOADING", false);
  }
  
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
