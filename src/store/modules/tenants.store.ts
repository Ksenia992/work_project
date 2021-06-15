import axios from "@/utils/axios";


const state = {
  tenants: [],
  isTenantsLoading: false,
  tenantById:null,
  errorInTenant:false,
  tenantsNames:[],
  serverItems:null
};
type TenantsState = {
  isTenantsLoading: boolean;
  tenants:string[]
  tenantById:any,
  errorInTenant:boolean,
  tenantsNames:string[],
  serverItems:any
};

type TenantMethods = {
  commit: (arg: string,arg2:any) => void
  dispatch:(arg:string, arg2:any) => void

}

type AddTenants = {
  
    name: string
    type: string
    email: string
    address: {
      street: string
      city: string
      zipCode: string
      country: string
    },
    contactInfo: {
      name: string
      phoneNumber: string
      email: string
    },

}


const getters = {};

const mutations = {
  LOADING: (state:TenantsState, payload:boolean) => {
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
  },
  SERVER_ITEMS:(state:TenantsState, payload:any) => {
    state.serverItems = payload
    },
  
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

  async GET_TENANTS_BYQUERY({ commit, dispatch }:TenantMethods, {perPage, page}:any) {
    commit("LOADING", true);

    try {
      const { data } = await axios.get("/tenants", { params: { perPage: perPage, page: page } });
      // const response=await axios.get("/tenants", { params: { perPage: perPage, page: page } });

      console.log(data.pagination.totalPages)
      console.log(data.pagination.perPage)


      const serverItems = data.pagination.totalPages * data.pagination.perPage
      
      if (data && data.tenants && Array.isArray(data.tenants)) {
        commit("SET_TENANTS", data.tenants ?? []);
        commit ('SERVER_ITEMS', serverItems)
      }
    } catch (error) {
      console.log("Error");
      console.log(error);
    }

    commit("LOADING", false);

  },





  // async GET_TENANTS_BYPAGE({ commit, dispatch }:TenantMethods, {page}:any) {
  //   commit("LOADING", true);

  //   try {
  //     const { data } = await axios.get("/tenants", { params: { page: page } });
  //     if (data && data.tenants && Array.isArray(data.tenants)) {
  //       commit("SET_TENANTS", data.tenants ?? []);
  //     }
  //   } catch (error) {
  //     console.log("Error");
  //     console.log(error);
  //   }

  //   commit("LOADING", false);

  // },









  async ADD_TENANTS({ commit, dispatch }:TenantMethods, payload:AddTenants) {
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
   
      console.log(data.name)
 
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
  },

  async DELETE_TENANT  ({ commit, dispatch }:TenantMethods,{tenantId}:any) {
    commit("LOADING", true);
    try {
      const { data } = await axios.delete(`/tenants/${tenantId}`);
    
  
    
    } catch (error) {
      console.log("Error");
      console.log(error);
      commit("SET_ERROR", true);
 

    }  
    commit("LOADING", false);


  },



  async CLEAR_TENANT ({ commit }:TenantMethods) {   
    commit('SET_ACTIVE_TENANT', null)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
