import React from 'react';
import { View, Image } from 'react-native';

const Main = () => {

  return (
    <View>
      <Image source={require('../../assets/image/main_img.jpg')}
        style={{ width: '100%', height: '75%' }} />
    </View >
  );
};

export default Main;