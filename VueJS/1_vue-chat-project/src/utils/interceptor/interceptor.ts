import axios from 'axios';
import { HOST_NAME } from '../../api/base';

let store: any;
const injectStore = (_store: any) => {
  store = _store;
};

axios.interceptors.request.use(
  function (config: any) {
    if (config.url !== `${HOST_NAME}/auth/register` && config.url !== `${HOST_NAME}/auth/login`) {
      config.headers.Authorization = `Bearer ${store.getters.jwt}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export { axios, injectStore };
