import axios from 'axios';
import { HOST_NAME } from './base';

export const messageApi = () => {
  return axios.get(`${HOST_NAME}/message/all`);
};
