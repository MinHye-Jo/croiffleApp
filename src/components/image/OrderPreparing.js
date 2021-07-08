import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const OrderPreparing = () => {

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(0, 191, 213)',
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
      fontSize: 15,
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>준비중</Text>
    </View>
  );
};

export default OrderPreparing;