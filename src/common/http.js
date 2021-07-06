import defaultConfig from '@config/defaultConfig';
import axios from 'axios';
import DeviceInfo from 'react-native-device-info';

let initToken = '';

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
  config.headers.token = initToken;


  console.log(" 왜사라짐? ");
  console.log(initToken);

  return config;
});

export const setToken = (token) => {
  initToken = token;
};


http.postFile = (url, params) => {
  const frm = new FormData();

  for (const key in params) {
    frm.append(key, typeof params[key] === 'object' && !params[key].type ? JSON.stringify(params[key]) : params[key]);
  }

  console.log('================11111', JSON.stringify(frm, 0, true))
  return http.post(url, frm, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};


export default http;
