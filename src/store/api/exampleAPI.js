import { makeRequest } from "./request/makeRequest";

const EXAMPLE = "";
console.log(EXAMPLE)
const fetchExample = (payload) =>
  makeRequest(`${EXAMPLE}${payload}`, {
    method: "GET",
  });

export const exampleAPI = {
  fetchExample,
};
