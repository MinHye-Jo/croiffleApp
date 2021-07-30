import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import DeviceInfo from 'react-native-device-info';
import { noticeIconControl } from 'store/app';
import { useRecoilState } from 'recoil';

const osType = DeviceInfo.getSystemName() === 'Android' ? 'ANDROID' : 'iOS';

// 네비게이션
const renderHeaderMenu = props => (
  <View style={{ flexDirection: 'row' }}>
    <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
      <Image
        style={{ width: 25, height: 25, marginLeft: 10, resizeMode: 'contain' }}
        source={require('../../../assets/image/icon/icon_menu_b.png')}
      />
    </TouchableOpacity>
  </View>
);

// 로고
const renderCrfLogo = props => (
  <View style={{ flex: 1, flexDirection: 'row' }}>
    <TouchableOpacity onPress={() => props.navigation.navigate('MainPage')}>
      <Image
        style={{ flex: 1, width: 180, height: 180, resizeMode: 'contain' }}
        source={require('../../../assets/image/logo_title_b.png')}
      />
    </TouchableOpacity>
  </View>
);

// 알림
const renderOrderNoti = (props, setNoticeIconFlag, notiIcon) => (
  <View style={{ flexDirection: 'row' }}>
    <TouchableOpacity
      onPress={() => {
        setNoticeIconFlag(false);
        props.navigation.navigate('NoticeList');
      }}>
      <Image style={{ width: 25, height: 25, marginRight: 10, resizeMode: 'contain' }} source={notiIcon} />
    </TouchableOpacity>
  </View>
);

const HeaderModule = props => {
  const [noticeIconFlag, setNoticeIconFlag] = useRecoilState(noticeIconControl);
  const notiIcon = noticeIconFlag
    ? require('../../../assets/image/icon/icon_notice_b_new.png')
    : require('../../../assets/image/icon/icon_notice_b.png');

  return (
    <Header
      containerStyle={{ height: osType == 'iOS' ? 100 : 80 }}
      backgroundColor="#ffffff"
      placement="center"
      leftComponent={renderHeaderMenu(props)}
      centerComponent={renderCrfLogo(props)}
      rightComponent={renderOrderNoti(props, setNoticeIconFlag, notiIcon)}
    />
  );
};

export default HeaderModule;
