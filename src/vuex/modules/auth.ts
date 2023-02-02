const state = {
    userInfo: null,
    loading: false,
  };
  
  const mutations = {
    START_CALL: (state: any, payload: any) => {
      state.loading = true;
    },
    END_CALL: (state: any, payload: any) => {
      state.loading = false;
    },
    LOGGED: (state: any, payload: any) => {
      state.userInfo = payload.data;
    },
    LOGOUT: (state: any, payload: any) => {
      state.userInfo = null;
    },
  };
  
  const actions = {
    startCall({ commit }: any, data: any) {
      commit("START_CALL");
    },
    endCall({ commit }: any, data: any) {
      commit("END_CALL");
    },
    logged({ commit }: any, data: any) {
      commit("LOGGED", data);      
    },
    logout({ commit }: any, data: any) {
      console.log("log otu");
  
      commit("LOGOUT", data);
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };
  