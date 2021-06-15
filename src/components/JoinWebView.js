import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const JoinWebView = () => {

  const styles = StyleSheet.create({
    container: {
      margin: 20
    },
  });

  return (
    <WebView style={styles.container} source={{ uri: 'https://reactnative.dev/' }} />
  );
};

export default JoinWebView;