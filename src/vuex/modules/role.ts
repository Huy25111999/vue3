const state = {
    loading: false,
    roleList: [],
    total: 0,
  };
  
  const mutations = {
    START_CALL: (state: any, payload: any) => {
      state.loading = true;
    },
    END_CALL: (state: any, payload: any) => {
      state.loading = false;
    },
    GROUP_ROLES_FETCHED: (state: any, payload: any) => {
      state.roleList = payload.data;
      state.total = payload.total;
    },
  };
  
  const actions = {
    startCall({ commit }: any, data: any) {
      commit("START_CALL");
    },
    endCall({ commit }: any, data: any) {
      commit("END_CALL");
    },
    fetchedRoles({ commit }: any, data: any) {
      commit("GROUP_ROLES_FETCHED", data);
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };
  