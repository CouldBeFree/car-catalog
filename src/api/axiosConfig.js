import axios from 'axios';
import qs from 'qs';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
});

export default axiosInstance;
