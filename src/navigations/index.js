import React, { useContext } from 'react';
import Main from '@screens/MainScreen';


import { View, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from '@screens/FirstPage';
import SecondPage from '@screens/SecondPage';
import ThirdPage from '@screens/ThirdPage';

// Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';

import HeaderModule from '@screens/HeaderModule';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  return (
    <HeaderModule navigation={props.navigationProps} />
  );
};

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="MainPage"
        component={Main}
        options={{
          header: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        header: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        )
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Second Page', //Set Header Title
        }}
      />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Third Page', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

const Navigation = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
        drawerStyle={{ padding: 0, margin: 0 }}>
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'First page Option' }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Second page Option' }}
          component={secondScreenStack}
        />
        <Drawer.Screen
          name="SecondPage2"
          options={{ drawerLabel: 'Second page Option' }}
          component={secondScreenStack}
        />
        <Drawer.Screen
          name="SecondPage3"
          options={{ drawerLabel: 'Second page Option' }}
          component={secondScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer >
  );
};

export default Navigation;