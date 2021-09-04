import axios from 'axios';

export const setHeader = (header, value) => {
  axios.defaults.headers.common[header] = value;
};
