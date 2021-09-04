import axiosApiInstance from './axios';

export const clearHeader = (header) => {
  delete axiosApiInstance.defaults.headers.common[header];
};
