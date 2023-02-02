
//import IParamRoles from "@/types";
import axios from "axios";
import {base_url} from "../baseURL"
import type { Enum } from "@/types";

const GET_ALL_ROLES_FILTERS_URL = base_url + "/user/role/filter-role";
const CREATE_ROLE_URL = base_url + "/user/role/create-role";
const DELETE_ROLE_URL = base_url + "/user/role/delete-role/";

// Search
export const getAllRoleFilters = (params: any) => {
    const currentParams = {
      ...params,
      status: 1,
    };
  
    return axios({
      url: GET_ALL_ROLES_FILTERS_URL,
      method: "GET",
      params: currentParams,
    });
  };
  
//Create
export const createRole = (params: Enum.IRole)=>{
  const request = {...params};
  return axios({
    url: CREATE_ROLE_URL,
    method: "POST",
    data: request
  })
}

//Delete
export const deleteRole = (params: Enum.IRole) => {
  return axios({
    url: DELETE_ROLE_URL + params.id,
    method: "DELETE",
    data: {},
  });
};