import React, { useState } from 'react';
import Navigation from './src/navigations';
import Main from '@screens/MainScreen';
import HeaderModule from '@screens/HeaderModule';
import { View } from 'react-native';


const App = () => {
  return (
    // <Navigation />
    <View>
      <HeaderModule />
      <Main />
    </View>

  )
};

export default App;