import axios from 'axios';
import { HOST_NAME } from './base';

export const userInfoApi = () => {
  return axios.get(`${HOST_NAME}/user/info`);
};

export const usersOnlineApi = () => {
  return axios.get(`${HOST_NAME}/users`);
};

export const setLoginStatusApi = (status: boolean, userId: string) => {
  return axios.post(`${HOST_NAME}/user/loginStatus`, { online: status, _id: userId });
};
