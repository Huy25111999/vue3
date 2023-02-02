//import { IAuthLogin } from "@/types/auth";
import Axios from "axios";
import {base_url} from "../baseURL"

const LOGIN_URL = base_url + "/user/login";

export const login = (params: any) => {
  const requestParams = {
    ...params,
  };

  return Axios({
    url: LOGIN_URL,
    method: "POST",
    data: requestParams,
  });
};
