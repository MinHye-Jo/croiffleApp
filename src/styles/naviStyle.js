import { StyleSheet, Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { pt20, pt18 } from 'styles/fontSizePack';

const osType = DeviceInfo.getSystemName() === 'Android' ? 'ANDROID' : 'iOS';

export default StyleSheet.create({
  sideTop: {
    backgroundColor: 'rgb(0,191,213)',
    height: osType == 'ANDROID' || Dimensions.get('window').height < 800 ? 50 : 100,
    marginTop: osType == 'ANDROID' || Dimensions.get('window').height < 800 ? 24 : 0,
    paddingTop: osType == 'ANDROID' || Dimensions.get('window').height < 800 ? 0 : 35,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sideTopFont: {
    color: '#FFFFFF',
    fontFamily: 'S-CoreDream-5Medium',
    fontSize: pt18,
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
    height: osType == 'ANDROID' || Dimensions.get('window').height < 800 ? 50 : 70,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  prevHeaderFont: {
    fontFamily: 'S-CoreDream-5Medium',
    fontSize: pt20,
    color: '#fff',
  },
});
