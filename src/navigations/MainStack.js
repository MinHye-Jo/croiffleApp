

import React, { useContext } from 'react';

import Login from '@screens/Login';
import Join from '@screens/Join';
import JoinForm from '@screens/JoinForm';
import JoinConfirm from '@screens/JoinConfirm';
import Main from '@screens/MainPage';
import PrivacyPolicy from '@screens/PrivacyPolicy';
import TermsOfService from '@screens/TermsOfService';

import HeaderModule from '@screens/HeaderModule';
import PrevHeaderModule from '@screens/PrevHeaderModule';

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
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="LoginPage"
        component={Login}
      />
      <Stack.Screen
        name="MainPage"
        component={Main}
        options={{
          header: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          )
        }}
      />
      <Stack.Screen
        name="JoinPage"
        component={Join}
        options={{
          header: () => (
            <PrevStackMove navigationProps={navigation} />
          )
        }}
      />
      <Stack.Screen
        name="JoinFormPage"
        component={JoinForm}
        options={{
          header: () => (
            <PrevStackMove navigationProps={navigation} />
          )
        }}
      />
      <Stack.Screen
        name="JoinConfirmPage"
        component={JoinConfirm}
        options={{
          header: () => (
            <PrevStackMove navigationProps={navigation} />
          )
        }}
      />
      <Stack.Screen
        options={{
          header: () => (
            <PrevStackMove navigationProps={navigation} />
          )
        }}
        name="TermsOfService"
        component={TermsOfService}
      />
      <Stack.Screen
        options={{
          header: () => (
            <PrevStackMove navigationProps={navigation} />
          )
        }}
        name="PrivacyPolicyPage"
        component={PrivacyPolicy}
      />
    </Stack.Navigator>
  );

}

export default MainStack;