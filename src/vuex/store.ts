
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import getters from "./getters";
import roleSlice from "./modules/role";
import authSlice from "./modules/auth";

const persitState = createPersistedState({
  key: "persit:user",
  paths: ["auth"],
});

const store = createStore({
    modules: {
      auth:authSlice,
      role: roleSlice,
    },
    getters: getters,
    plugins: [persitState],
  });
  
  export default store;