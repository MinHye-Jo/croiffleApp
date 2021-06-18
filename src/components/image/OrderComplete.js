import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const OrderComplete = () => {

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(174, 174, 174)',
      alignItems: 'center',
      borderRadius: 50,
      height: 30,
      justifyContent: 'center',
    },
    txt: {
      color: '#fff',
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 15,
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>픽업완료</Text>
    </View>
  );
};

export default OrderComplete;