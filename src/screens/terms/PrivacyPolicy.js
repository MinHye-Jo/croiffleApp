// 개인정보 처리방침
import React from 'react';
import { View } from 'react-native';
import JoinWebView from '@components/JoinWebView';
import AgreeButton from '@components/button/AgreeButton';

const PrivacyPolicy = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1 }}>
      <JoinWebView />
      <AgreeButton navigation={navigation} route={route} type={"service"} />
    </View>
  );
};

export default PrivacyPolicy;