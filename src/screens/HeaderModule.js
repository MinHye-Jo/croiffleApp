import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

// 네비게이션
const renderHeaderMenu = (props) => (
  <View style={{ flexDirection: 'row' }}>
    <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
      <Image
        style={{ width: 25, height: 25, marginLeft: 10, resizeMode: "contain" }}
        source={require('../../assets/image/icon/icon_menu_b.png')}
      />
    </TouchableOpacity>
  </View>
);

// 로고
const renderCrfLogo = (props) => (
  <View style={{ flex: 1, flexDirection: 'row' }}>
    <TouchableOpacity onPress={() => props.navigation.navigate('MainPage', {
      screen: 'HomeTab'
    })}>
      <Image
        style={{ flex: 1, width: 180, height: 180, resizeMode: "contain" }}
        source={require('../../assets/image/logo_title_b.png')}
      />
    </TouchableOpacity>
  </View>
);

// 알림
const renderMyPage = (props) => (
  <View style={{ flexDirection: 'row' }}>
    <TouchableOpacity onPress={() => props.auth == null ? props.navigation.navigate('LoginPage') : props.auth.accessToken == null ? props.navigation.navigate('LoginPage') : props.navigation.navigate('MyPage')}>
      <Image
        style={{ width: 25, height: 25, marginRight: 10, resizeMode: "contain" }}
        source={require('../../assets/image/icon/icon_notice_b.png')}
      />
    </TouchableOpacity>
  </View>
);


const HeaderModule = (props) => {
  return (
    <Header
      containerStyle={{ height: 100 }}
      backgroundColor='#fff'
      placement='center'
      leftComponent={renderHeaderMenu(props)}
      centerComponent={renderCrfLogo(props)}
      rightComponent={renderMyPage(props)}
    />
  )
};


export default HeaderModule;