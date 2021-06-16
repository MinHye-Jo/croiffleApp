

import React, { useContext } from 'react';

import Login from '@screens/Login';
import Join from '@screens/join/Join';
import JoinForm from '@screens/join/JoinForm';
import JoinConfirm from '@screens/join/JoinConfirm';
import Main from '@screens/main/MainPage';
import PrivacyPolicy from '@screens/terms/PrivacyPolicy';
import TermsOfService from '@screens/terms/TermsOfService';
import PersonalInfo from '@screens/PersonalInfo';
import PasswordEdit from '@screens/PasswordEdit';
import CustomerSupport from '@screens/CustomerSupport';
import StoreManagement from '@screens/storemanagement/StoreManagement';
import StoreInfoEdit from '@screens/storemanagement/StoreInfoEdit';
import OpeningHours from '@screens/storemanagement/OpeningHours';
import HolidaySetting from '@screens/storemanagement/HolidaySetting';
import MenuManagement from '@screens/storemanagement/MenuManagement';

import HeaderModule from '@screens/header/HeaderModule';
import PrevHeaderModule from '@screens/header/PrevHeaderModule';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const NavigationDrawerStructure = (props) => {
  return (
    <HeaderModule navigation={props.navigationProps} />
  );
};

const PrevStackMove = (props) => {
  return (
    <PrevHeaderModule navigation={props.navigationProps} />
  );
};

const MainStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Main">
      {/* 로그인 */}
      <Stack.Screen
        name="LoginPage"
        options={{
          headerShown: false,
        }}
        component={Login}
      />
      {/* 메인 */}
      <Stack.Screen
        name="MainPage"
        component={Main}
        options={{
          header: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          )
        }}
      />
      {/* 매장관리 */}
      <Stack.Screen
        name="StoreManagement"
        options={{
          header: () => (
            <PrevStackMove navigationProps={navigation} />
          )
        }}
        component={StoreManagement}
      />
      {/* 매장정보 수정 */}
      <Stack.Screen
        name="StoreInfoEdit"
        options={{
          header: () => (
            <PrevStackMove navigationProps={navigation} />
          )
        }}
        component={StoreInfoEdit}
      />
      {/* 영업시간 설정 */}
      <Stack.Screen
        name="OpeningHours"
        options={{
          header: () => (
            <PrevStackMove navigationProps={navigation} />
          )
        }}
        component={OpeningHours}
      />
      {/* 휴무일 설정 */}
      <Stack.Screen
        name="HolidaySetting"
        options={{
          header: () => (
            <PrevStackMove navigationProps={navigation} />
          )
        }}
        component={HolidaySetting}
      />
      {/* 메뉴관리 */}
      <Stack.Screen
        name="MenuManagement"
        options={{
          header: () => (
            <PrevStackMove navigationProps={navigation} />
          )
        }}
        component={MenuManagement}
      />
      {/* 회원가입 메인 */}
      <Stack.Screen
        name="JoinPage"
        component={Join}
        options={{
          header: () => (
            <PrevStackMove navigationProps={navigation} />
          )
        }}
      />
      {/* 회원가입 양식 */}
      <Stack.Screen
        name="JoinFormPage"
        component={JoinForm}
        options={{
          header: () => (
            <PrevStackMove navigationProps={navigation} />
          )
        }}
      />
      {/* 회원가입 완료 */}
      <Stack.Screen
        name="JoinConfirmPage"
        component={JoinConfirm}
        options={{
          header: () => (
            <PrevStackMove navigationProps={navigation} />
          )
        }}
      />
      {/* 개인정보관리 */}
      <Stack.Screen
        name="PersonalInfo"
        options={{
          header: () => (
            <PrevStackMove navigationProps={navigation} />
          )
        }}
        component={PersonalInfo}
      />
      {/* 비밀번호 수정 */}
      <Stack.Screen
        name="PasswordEdit"
        options={{
          header: () => (
            <PrevStackMove navigationProps={navigation} />
          )
        }}
        component={PasswordEdit}
      />
      {/* 서비스 이용약관 */}
      <Stack.Screen
        name="TermsOfService"
        options={{
          header: () => (
            <PrevStackMove navigationProps={navigation} />
          )
        }}
        component={TermsOfService}
      />
      {/* 개인정보 처리방침 */}
      <Stack.Screen
        name="PrivacyPolicyPage"
        options={{
          header: () => (
            <PrevStackMove navigationProps={navigation} />
          )
        }}
        component={PrivacyPolicy}
      />
      {/* 고객지원 */}
      <Stack.Screen
        name="CustomerSupport"
        options={{
          header: () => (
            <PrevStackMove navigationProps={navigation} />
          )
        }}
        component={CustomerSupport}
      />

    </Stack.Navigator>
  );

}

export default MainStack;