import React, { useEffect } from 'react';
import Navigation from './src/navigations';
import SplashScreen from 'react-native-splash-screen';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

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