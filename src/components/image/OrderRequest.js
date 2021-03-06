import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { pt15 } from 'styles/fontSizePack';

const OrderRequest = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(255, 96, 1)',
      alignItems: 'center',
      borderRadius: 50,
      height: 30,
      marginLeft: 10,
      marginRight: 10,
      justifyContent: 'center',
    },
    txt: {
      color: '#fff',
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: pt15,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>요청중</Text>
    </View>
  );
};

export default OrderRequest;
