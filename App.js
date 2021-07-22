import React, { useEffect, useState } from 'react';
import Navigation from './src/navigations';
import SplashScreen from 'react-native-splash-screen';
import NetInfo from '@react-native-community/netinfo';
import { LogBox } from 'react-native';
import { RecoilRoot } from 'recoil';
import DefaultModal from 'components/modal/DefaultModal';

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
LogBox.ignoreLogs(['Setting a timer']);

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // SplashScreen 종료
    SplashScreen.hide();

    // 인터넷 연결 확인
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      if (!state.isConnected) {
        setModalOpen(true);
      }
    });

    // Unsubscribe
    unsubscribe();
  }, []);

  return (
    <RecoilRoot>
      <DefaultModal
        modalOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        modalTitle="인터넷연결 끊김"
        modalText="인터넷연결이 끊어졌습니다."
        modalTextSec="연결을 확인하시고 다시 접속해주세요."
      />
      <Navigation />
    </RecoilRoot>
  );
};

export default App;
