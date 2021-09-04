import axiosApiInstance from "./axios";

export const setCookies = (cookies = "") => {
  axiosApiInstance.defaults.headers.common.Cookie = cookies;
};
