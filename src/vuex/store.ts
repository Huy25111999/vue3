
import { createStore } from "vuex";
import getters from "./getters";
import roleSlice from "./modules/role";
import authSlice from "./modules/auth";
const store = createStore({
    modules: {
      auth:authSlice,
      role: roleSlice,
    },
    getters: getters,
    plugins: [],
  });
  
  export default store;