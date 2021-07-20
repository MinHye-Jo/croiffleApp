import DeviceInfo from 'react-native-device-info';

const osType = DeviceInfo.getSystemName() === 'Android' ? 'ANDROID' : 'iOS';

const prod = {
  apiUrl: 'http://croifflekitchen.co.kr/api/v1/',
  baseUrl: 'http://croifflekitchen.co.kr/',
  isLocal: false,
};

const dev = {
  apiUrl: osType == 'iOS' ? 'http://localhost:8090/api/v1/' : 'http://10.0.2.2:8090/api/v1/',
  baseUrl: osType == 'iOS' ? 'http://localhost:8090/' : 'http://10.0.2.2:8090/',
  isLocal: true,
};

export default __DEV__ ? dev : prod;
