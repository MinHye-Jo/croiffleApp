import { StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const osType = DeviceInfo.getSystemName() === 'Android' ? 'ANDROID' : 'iOS';

export default StyleSheet.create({
  sideTop: {
    backgroundColor: 'rgb(0,191,213)',
    height: osType == 'ANDROID' ? 50 : 100,
    marginTop: osType == 'ANDROID' ? 24 : 0,
    paddingTop: osType == 'ANDROID' ? 0 : 35,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sideTopFont: {
    color: '#FFFFFF',
    fontFamily: 'S-CoreDream-5Medium',
    fontSize: 18,
    paddingLeft: 10,
  },
  sideTopIcon: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutBtn: {
    backgroundColor: 'rgb(242, 243, 245)',
    height: osType == 'ANDROID' ? 50 : 70,
    paddingLeft: 20,
    justifyContent: 'center',
  },
});
