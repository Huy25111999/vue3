import { useSnackBar } from './../../helpers/useSnackbar';
import router from "@/router";


const snackBar =useSnackBar();

const setUpAxios = (axios: any, store: any) => {
  // Add a request interceptor

  axios.interceptors.request.use(
    function (request: any) {
      const token = store.getters.auth.userInfo?.token;

      if (token) {
        request.headers.Authorization = `Bearer ${token}`;
      }
      // Do something before request is sent
      return request;
    },
    function (error: any) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function (response: any) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data

      return response;
    },
    function (error: any) {
      if (error.response.status === 401) {
        store.dispatch("auth/logout");
        router.push("/login");
      }

      if(error.response.data.code === "NOT_PERMISSION"){
        snackBar.showError(error.response.data.message)
      }

      if(error.response.data.code === "ERROR_ACCOUNT_LOGGED_IN_ON_ANOTHER_DEVICE"){      
        store.dispatch("auth/logout");
        router.push("/login");
        snackBar.showError(error.response.data.message)
      }
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
};

export default setUpAxios;
