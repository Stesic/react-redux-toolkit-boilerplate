import axios from "axios";

import Cookies from "js-cookie";

const axiosApiInstance = axios.create();

// Add a request interceptor
(async (store) => {
  axiosApiInstance.interceptors.request.use(
    (config) => {
      const token = Cookies.get('XSRF-TOKEN')
      if (token) {
        config.headers["Authorization"] = token;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosApiInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {

      return Promise.reject(error);
    }
  );
})();

export default axiosApiInstance;
