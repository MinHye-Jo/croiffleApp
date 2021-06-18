import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const OrderDenial = () => {

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(255, 83, 83)',
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
      <Text style={styles.txt}>주문거부</Text>
    </View>
  );
};

export default OrderDenial;