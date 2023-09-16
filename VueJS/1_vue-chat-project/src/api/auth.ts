import axios from 'axios';
import { HOST_NAME } from './base';
import type { User } from './model/User';

export const signUpApi = (data: User) => {
  return axios.post(`${HOST_NAME}/auth/register`, data);
};

export const signInApi = (email: string, password: string) => {
  return axios.post(`${HOST_NAME}/auth/login`, { email, password });
};

export const logoutApi = () => {
  return axios.post(`${HOST_NAME}/auth/logout`);
};
