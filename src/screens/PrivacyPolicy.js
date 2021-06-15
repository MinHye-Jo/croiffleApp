// 개인정보 처리방침
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import JoinWebView from '@components/JoinWebView';
import AgreeButton from '@components/AgreeButton';

const PrivacyPolicy = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <JoinWebView />
      <AgreeButton />
    </View>
  );
};

export default PrivacyPolicy;