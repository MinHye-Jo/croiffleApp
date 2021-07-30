import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import SoundPlayer from 'react-native-sound-player';
import messaging from '@react-native-firebase/messaging';

// 화면
import Login from 'screens/Login';
import FindIdPage from 'screens/FindIdPage';
import FindPassword from 'screens/FindPassword';

import Join from 'screens/join/Join';
import JoinForm from 'screens/join/JoinForm';
import JoinConfirm from 'screens/join/JoinConfirm';

import Main from 'screens/main/MainPage';
import NoticeList from 'screens/notice/NoticeList';

import PrivacyPolicy from 'screens/terms/PrivacyPolicy';
import TermsOfService from 'screens/terms/TermsOfService';

import PersonalInfo from 'screens/PersonalInfo';
import PasswordEdit from 'screens/PasswordEdit';
import CustomerSupport from 'screens/CustomerSupport';

import OrderHistory from 'screens/order/OrderHistory';
import OrderDetail from 'screens/order/OrderDetail';

import StoreManagement from 'screens/store/StoreManagement';
import StoreInfoEdit from 'screens/store/StoreInfoEdit';
import OpeningHours from 'screens/store/OpeningHours';
import HolidaySetting from 'screens/store/HolidaySetting';
import MenuManagement from 'screens/store/MenuManagement';

import HeaderModule from 'screens/header/HeaderModule';
import PrevHeaderModule from 'screens/header/PrevHeaderModule';

import OrderNoticeModal from 'components/modal/OrderNoticeModal';

import { noticeListState, noticeDataAppend, noticeIconControl } from 'store/app';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';

const Stack = createStackNavigator();

const NavigationDrawerStructure = props => {
  return <HeaderModule navigation={props.navigationProps} />;
};

const PrevStackMove = props => {
  return <PrevHeaderModule navigation={props.navigationProps} title={props.title} />;
};

const MainStack = ({ navigation }) => {
  // 모달 데이터
  const [modalOpen, setModalOpen] = useState(false);
  const noticeData = useRecoilValue(noticeListState);
  const setNoticeDataAppend = useSetRecoilState(noticeDataAppend);
  const [noticeIconFlag, setNoticeIconFlag] = useRecoilState(noticeIconControl);

  // 주문 알림 팝업
  useEffect(() => {
    // 메시지 이벤트 처리
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // 알림 음성파일 실행
      try {
        SoundPlayer.loadSoundFile('ring', 'mp3');
        SoundPlayer.play();
      } catch (e) {
        console.log('cannot play the sound file', e);
      }

      // 데이터 저장
      const re = remoteMessage.data;
      if (re && re.new === 'true') {
        setNoticeIconFlag(true);
        setNoticeDataAppend(re);
      }

      setModalOpen(true);
    });

    return unsubscribe;
  }, []);

  // 앱이 백그라운드에 있을경우 알림데이터 처리
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    // 데이터 저장
    const re = remoteMessage.data;
    if (re && re.new === 'true') {
      setNoticeDataAppend(re);
    }

    setModalOpen(true);
  });

  return (
    <View style={{ flex: 1 }}>
      <OrderNoticeModal
        modalOpen={modalOpen}
        navigation={navigation}
        onClose={() => setModalOpen(false)}
        data={noticeData}
      />
      <Stack.Navigator initialRouteName="Main">
        {/* 로그인 */}
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        {/* 메인 */}
        <Stack.Screen
          name="MainPage"
          component={Main}
          options={{
            header: () => <NavigationDrawerStructure navigationProps={navigation} />,
          }}
        />
        {/* 알림내역 */}
        <Stack.Screen
          name="NoticeList"
          component={NoticeList}
          options={{
            header: () => <PrevStackMove navigationProps={navigation} title="알림내역" />,
          }}
        />
        {/* 주문내역 */}
        <Stack.Screen
          name="OrderHistory"
          component={OrderHistory}
          options={{
            header: () => <PrevStackMove navigationProps={navigation} title="주문내역" />,
          }}
        />
        {/* 주문상세 */}
        <Stack.Screen
          name="OrderDetail"
          component={OrderDetail}
          options={{
            header: () => <PrevStackMove navigationProps={navigation} title="주문내역" />,
          }}
        />
        {/* 매장관리 */}
        <Stack.Screen
          name="StoreManagement"
          component={StoreManagement}
          options={{
            header: () => <PrevStackMove navigationProps={navigation} title="매장관리" />,
          }}
        />
        {/* 매장정보 수정 */}
        <Stack.Screen
          name="StoreInfoEdit"
          component={StoreInfoEdit}
          options={{
            header: () => <PrevStackMove navigationProps={navigation} title="매장정보 수정" />,
          }}
        />
        {/* 영업시간 설정 */}
        <Stack.Screen
          name="OpeningHours"
          component={OpeningHours}
          options={{
            header: () => <PrevStackMove navigationProps={navigation} title="영업시간 설정" />,
          }}
        />
        {/* 휴무일 설정 */}
        <Stack.Screen
          name="HolidaySetting"
          component={HolidaySetting}
          options={{
            header: () => <PrevStackMove navigationProps={navigation} title="휴무일 설정" />,
          }}
        />
        {/* 메뉴관리 */}
        <Stack.Screen
          name="MenuManagement"
          component={MenuManagement}
          options={{
            header: () => <PrevStackMove navigationProps={navigation} title="메뉴관리" />,
          }}
        />
        {/* 아이디 찾기 */}
        <Stack.Screen
          name="FindIdPage"
          component={FindIdPage}
          options={{
            header: () => <PrevStackMove navigationProps={navigation} title="아이디 찾기" />,
          }}
        />
        {/* 비밀번호 찾기 */}
        <Stack.Screen
          name="FindPassword"
          component={FindPassword}
          options={{
            header: () => <PrevStackMove navigationProps={navigation} title="비밀번호 찾기" />,
          }}
        />
        {/* 회원가입 메인 */}
        <Stack.Screen
          name="JoinPage"
          component={Join}
          options={{
            header: () => <PrevStackMove navigationProps={navigation} title="회원가입" />,
          }}
        />
        {/* 회원가입 양식 */}
        <Stack.Screen
          name="JoinFormPage"
          component={JoinForm}
          options={{
            header: () => <PrevStackMove navigationProps={navigation} title="회원가입" />,
          }}
        />
        {/* 회원가입 완료 */}
        <Stack.Screen
          name="JoinConfirmPage"
          component={JoinConfirm}
          options={{
            header: () => <PrevStackMove navigationProps={navigation} title="회원가입" />,
          }}
        />
        {/* 개인정보관리 */}
        <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfo}
          options={{
            header: () => <PrevStackMove navigationProps={navigation} title="개인정보관리" />,
          }}
        />
        {/* 비밀번호 수정 */}
        <Stack.Screen
          name="PasswordEdit"
          component={PasswordEdit}
          options={{
            header: () => <PrevStackMove navigationProps={navigation} title="비밀번호 수정" />,
          }}
        />
        {/* 서비스 이용약관 */}
        <Stack.Screen
          name="TermsOfService"
          component={TermsOfService}
          options={{
            header: () => <PrevStackMove navigationProps={navigation} title="서비스 이용약관" />,
          }}
        />
        {/* 개인정보 처리방침 */}
        <Stack.Screen
          name="PrivacyPolicyPage"
          component={PrivacyPolicy}
          options={{
            header: () => <PrevStackMove navigationProps={navigation} title="개인정보처리방침" />,
          }}
        />
        {/* 고객지원 */}
        <Stack.Screen
          name="CustomerSupport"
          component={CustomerSupport}
          options={{
            header: () => <PrevStackMove navigationProps={navigation} title="고객지원" />,
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default MainStack;
