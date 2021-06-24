import defaultConfig from '@config/defaultConfig';
import axios from 'axios';
import DeviceInfo from 'react-native-device-info';

let jwtToken = '';

const { apiUrl } = defaultConfig;
const axiosConfig = {
  baseURL: apiUrl,
  timeout: 60 * 3 * 1000,
  headers: {
    key: 'EMPLOYEE-50aa4nwaA408nQp5QJjuLM',
    uuid: DeviceInfo.getUniqueId()
  }
};

const http = axios.create(axiosConfig);

http.interceptors.request.use((config) => {
  config.headers.authorization = jwtToken;

  return config;
});

export const setJwtToken = (token) => {
  jwtToken = token;
};

export default http;
