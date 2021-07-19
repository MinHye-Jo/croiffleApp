import React, { useEffect } from 'react';
import Navigation from './src/navigations';
import SplashScreen from 'react-native-splash-screen';
import { LogBox } from 'react-native';
import { RecoilRoot } from 'recoil';

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
LogBox.ignoreLogs(['Setting a timer']);

const App = () => {
  // SplashScreen 종료
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <RecoilRoot>
      <Navigation />
    </RecoilRoot>
  );
};

export default App;
