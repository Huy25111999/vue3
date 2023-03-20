
import * as requestFromServer from "./roleApi";
import store from "@/vuex/store";
import type { Enum } from "@/types";

//Search
export const fetchAllRoleFilters = (params: any) => {
    store.dispatch("role/startCall");
  
    return requestFromServer
      .getAllRoleFilters(params)
      .then((res: any) => {
        store.dispatch("role/fetchedRoles", res?.data);
        return res?.data?.data
      })
      .catch((error) => {})
      .finally(() => {
        store.dispatch("role/endCall");
      });
  };

// Add
export const creatRole = (params: any) =>{
  store.dispatch("role/startCall");
  return requestFromServer.createRole(params).finally(()=>{
    store.dispatch("role/endCall")
  })
}

//delete
export const deleteRole = (params: Enum.IRole) => {
  store.dispatch("role/startCall");

  return requestFromServer.deleteRole(params).finally(() => {
    store.dispatch("role/endCall");
  });
};

// Form Data