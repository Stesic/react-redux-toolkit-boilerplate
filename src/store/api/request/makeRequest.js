import https from "https";
import axiosApiInstance from "./axios";

import { setHeader } from "./setHeader";

const API_URL = process.env.REACT_APP_URL;

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export const makeRequest = (
  url,
  { body, method, headers, cancelToken = "" }
) => {
  if (typeof window === "undefined") {
    setHeader("Origin", API_URL);
    setHeader("Referer", API_URL);
  }

  return axiosApiInstance({
    method,
    url: `${API_URL}${url}`,
    data: body,
    withCredentials: false,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    httpsAgent,
    xsrfHeaderName: "Authorization",
    cancelToken,
  });
};
