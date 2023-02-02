
import * as requestFromServer from "./authApi";
import store from "@/vuex/store";
//import { IAuthLogin } from "@/types/auth";

export const login = (params: any) => {
  store.dispatch("auth/startCall");
  return requestFromServer.login(params).finally(() => {
    store.dispatch("auth/endCall");
  });
};

export const logout = () => {
  store.dispatch("auth/logged", { data: null });
};
