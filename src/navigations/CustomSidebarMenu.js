import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import { DrawerContentScrollView } from '@react-navigation/drawer';

import OrderHistoryButton from '@components/OrderHistoryButton'
import StoreManageButton from '@components/StoreManageButton'
import IconNextBlack from '@components/IconNextBlack'

import naviStyle from '@styles/naviStyle'
import styles from '@styles/commonStyle'

const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* 사이드메뉴 상단 */}
      <View style={naviStyle.sideTop}>
        <View style={styles.rowFlex2Left}>
          <Text style={naviStyle.sideTopFont}>고객님, 안녕하세요!</Text>
        </View>
        <View style={styles.rowFlex1Right}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Image source={require('../../assets/image/icon/icon_menu_close.png')} style={{ resizeMode: 'contain', width: 25, height: 25 }} />
          </TouchableOpacity>
        </View>
      </View>
      {/* 주문내역, 매장관리 버튼 */}
      <View style={{ height: '20%', backgroundColor: 'rgb(242, 243, 245)' }}>
        <View style={{ flexDirection: 'row' }}>
          <OrderHistoryButton />
          <StoreManageButton navigation={props.navigation} />
        </View>
      </View>
      {/* 사이드메뉴 항목 */}
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        <TouchableOpacity onPress={() => props.navigation.navigate('PersonalInfo')}>
          <View style={{ ...styles.row, paddingLeft: 20, paddingBottom: 10 }}>
            <View style={styles.rowFlex2Left}>
              <Text style={styles.font5M15}>개인정보관리</Text>
            </View>
            <View style={styles.rowFlex1Right}>
              <IconNextBlack />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('PasswordEdit')}>
          <View style={{ ...styles.row, paddingLeft: 20, paddingBottom: 10 }}>
            <View style={styles.rowFlex2Left}>
              <Text style={styles.font5M15}>비밀번호 수정</Text>
            </View>
            <View style={styles.rowFlex1Right}>
              <IconNextBlack />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('TermsOfService')}>
          <View style={{ ...styles.row, paddingLeft: 20, paddingBottom: 10 }}>
            <View style={styles.rowFlex2Left}>
              <Text style={styles.font5M15}>서비스이용약관</Text>
            </View>
            <View style={styles.rowFlex1Right}>
              <IconNextBlack />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('PrivacyPolicyPage')}>
          <View style={{ ...styles.row, paddingLeft: 20, paddingBottom: 10 }}>
            <View style={styles.rowFlex2Left}>
              <Text style={styles.font5M15}>개인정보처리방침</Text>
            </View>
            <View style={styles.rowFlex1Right}>
              <IconNextBlack />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('CustomerSupport')}>
          <View style={{ ...styles.row, paddingLeft: 20, paddingBottom: 10 }}>
            <View style={styles.rowFlex2Left}>
              <Text style={styles.font5M15}>고객지원</Text>
            </View>
            <View style={styles.rowFlex1Right}>
              <IconNextBlack />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
      </DrawerContentScrollView>

      {/* 로그인 로그아웃 */}
      <View style={{ backgroundColor: 'rgb(242, 243, 245)', height: '5%', paddingLeft: 20, justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => props.navigation.navigate('LoginPage')}>
          <Text style={styles.font5M15}>로그아웃</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView >
  );
};

export default CustomSidebarMenu;