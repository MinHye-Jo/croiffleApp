import React from 'react';
import { View, Image } from 'react-native';

import OrderHistoryButton from '@components/OrderHistoryButton'
import StoreManageButton from '@components/StoreManageButton'

const Main = () => {

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: '55%' }}>
        <Image
          source={require('../../assets/image/main_img.jpg')}
          style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
      </View>
      <View style={{ height: '25%' }}>
        <View style={{ flexDirection: 'row' }}>
          <OrderHistoryButton />
          <StoreManageButton />
        </View>
      </View>
    </View >
  );
};

export default Main;