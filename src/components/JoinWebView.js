import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import defaultConfig from 'config/defaultConfig';

const { baseUrl } = defaultConfig;
const JoinWebView = ({ type }) => {
  const styles = StyleSheet.create({
    container: {
      margin: 20,
    },
  });

  let webViewUrl = '';

  switch (type) {
    case 'terms':
      webViewUrl = baseUrl + 'view/terms/service';
      break;
    case 'service':
      webViewUrl = baseUrl + 'view/terms/privacy';
      break;
  }

  return <WebView style={styles.container} source={{ uri: webViewUrl }} />;
};

export default JoinWebView;
