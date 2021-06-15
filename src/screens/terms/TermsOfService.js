// 서비스 이용약관
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import JoinWebView from '@components/JoinWebView';
import AgreeButton from '@components/AgreeButton';

const TermsOfService = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <JoinWebView />
      <AgreeButton />
    </View>
  );
};

export default TermsOfService;