// 서비스 이용약관
import React from 'react';
import { View } from 'react-native';
import JoinWebView from '@components/JoinWebView';
import AgreeButton from '@components/button/AgreeButton';

const TermsOfService = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1 }}>
      <JoinWebView />
      <AgreeButton navigation={navigation} route={route} type={"terms"} />
    </View>
  );
};

export default TermsOfService;