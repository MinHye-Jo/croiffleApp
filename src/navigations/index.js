import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';
import MainStack from './MainStack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ swipeEnabled: false }}
        drawerContent={props => <CustomSidebarMenu {...props} />}>
        <Stack.Screen name="MainStack" component={MainStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
