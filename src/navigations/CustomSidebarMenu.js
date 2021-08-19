import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

import OrderHistoryButton from 'components/button/OrderHistoryButton';
import StoreManageButton from 'components/button/StoreManageButton';
import IconNextBlack from 'components/image/IconNextBlack';

import naviStyle from 'styles/naviStyle';
import styles from 'styles/commonStyle';
import { ScrollView } from 'react-native-gesture-handler';

import { useResetRecoilState } from 'recoil';
import { noticeListState } from 'store/app';

import { logout } from 'services/auth';

const CustomSidebarMenu = props => {
  const resetData = useResetRecoilState(noticeListState);
  const userName = window.userInfo ? window.userInfo.name : '고객';

  // 로그아웃 버튼 클릭시 데이터 초기화
  const logoutAction = async () => {
    await logout();
    // 토픽 해제
    const topic = `croiffle-order-employee-${userInfo.shopId}`;
    messaging().unsubscribeFromTopic(topic);

    // 데이터 리셋
    await AsyncStorage.removeItem('token');
    resetData();
    window.userInfo = null;
    props.navigation.navigate('LoginPage');
  };

  return (
    <View style={{ flex: 1 }}>
      {/* 사이드메뉴 상단 */}
      <View style={naviStyle.sideTop}>
        <View>
          <Text style={naviStyle.sideTopFont}>{userName}님, 안녕하세요!</Text>
        </View>
        <View style={styles.rowFlex1Right}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Image
              source={require('../../assets/image/icon/icon_menu_close.png')}
              style={{ resizeMode: 'contain', width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* 주문내역, 매장관리 버튼 */}
      <View style={{ height: 170, backgroundColor: 'rgb(242, 243, 245)' }}>
        <View style={{ flexDirection: 'row' }}>
          <OrderHistoryButton navigation={props.navigation} />
          <StoreManageButton navigation={props.navigation} />
        </View>
      </View>
      {/* 사이드메뉴 항목 */}
      <View style={{ ...styles.hr, marginBottom: 0 }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingLeft: 20, paddingTop: 20, paddingBottom: 10 }}>
          {window.userInfo && window.userInfo.role == 'ROLE_SHOP_ADMIN' ? (
            <TouchableOpacity onPress={() => props.navigation.navigate('PersonalInfo')}>
              <View style={{ ...styles.row, paddingBottom: 10 }}>
                <View style={styles.rowFlex2Left}>
                  <Text style={styles.font5M15}>직원관리</Text>
                </View>
                <View style={styles.rowFlex1Right}>
                  <IconNextBlack />
                </View>
              </View>
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity onPress={() => props.navigation.navigate('PersonalInfo')}>
            <View style={{ ...styles.row, paddingBottom: 10 }}>
              <View style={styles.rowFlex2Left}>
                <Text style={styles.font5M15}>개인정보관리</Text>
              </View>
              <View style={styles.rowFlex1Right}>
                <IconNextBlack />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('PasswordEdit')}>
            <View style={{ ...styles.row, paddingBottom: 10 }}>
              <View style={styles.rowFlex2Left}>
                <Text style={styles.font5M15}>비밀번호 수정</Text>
              </View>
              <View style={styles.rowFlex1Right}>
                <IconNextBlack />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('TermsOfService')}>
            <View style={{ ...styles.row, paddingBottom: 10 }}>
              <View style={styles.rowFlex2Left}>
                <Text style={styles.font5M15}>서비스이용약관</Text>
              </View>
              <View style={styles.rowFlex1Right}>
                <IconNextBlack />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('PrivacyPolicyPage')}>
            <View style={{ ...styles.row, paddingBottom: 10 }}>
              <View style={styles.rowFlex2Left}>
                <Text style={styles.font5M15}>개인정보처리방침</Text>
              </View>
              <View style={styles.rowFlex1Right}>
                <IconNextBlack />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('CustomerSupport')}>
            <View style={{ ...styles.row, paddingBottom: 10 }}>
              <View style={styles.rowFlex2Left}>
                <Text style={styles.font5M15}>고객지원</Text>
              </View>
              <View style={styles.rowFlex1Right}>
                <IconNextBlack />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.hr} />
      </ScrollView>

      {/* 로그아웃 */}
      <TouchableOpacity style={naviStyle.logoutBtn} onPress={logoutAction}>
        <Text style={styles.font5M15}>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomSidebarMenu;
