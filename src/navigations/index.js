import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './Mainstack';

const Navigation = () => {

  return (
    <NavigationContainer>
      <MainStack />
      {/* {user?.uid && user?.email ? <MainStack /> : <AuthStack />} */}
    </NavigationContainer>
  );
};

export default Navigation;