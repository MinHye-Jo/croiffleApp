import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { Channel, ChannelCreation } from '../screens';
// import MainTab from './MainTab';

const Stack = createStackNavigator();

const MainStack = () => {
  // const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTitleAlign: 'center',
        // headerTintColor: theme.headerTintColor,
        // cardStyle: { backgroundColor: theme.backgroundColor },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Main" />
      <Stack.Screen name="Channel Creation" />
      <Stack.Screen name="Channel" />
    </Stack.Navigator>
  );
};

export default MainStack;