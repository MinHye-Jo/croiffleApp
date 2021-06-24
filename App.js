import React, { useEffect } from 'react';
import Navigation from './src/navigations';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  // SplashScreen 종료
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Navigation />
  )
};

export default App;