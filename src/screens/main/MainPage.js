import React from 'react';
import { View, Image } from 'react-native';

import OrderHistoryButton from '@components/button/OrderHistoryButton'
import StoreManageButton from '@components/button/StoreManageButton'

const Main = (props) => {

  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(242, 243, 245)' }}>
      <View style={{ height: '55%' }}>
        <Image
          source={require('../../../assets/image/main_img.jpg')}
          style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
      </View>
      <View style={{ height: '25%' }}>
        <View style={{ flexDirection: 'row' }}>
          <OrderHistoryButton />
          <StoreManageButton navigation={props.navigation} />
        </View>
      </View>
    </View >
  );
};

export default Main;