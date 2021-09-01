import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { pt20 } from 'styles/fontSizePack';

const OrderFlowCancel = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewContainer: {
      flex: 1,
      alignItems: 'center',
    },
    activeTxt: {
      color: 'rgb(0, 191, 213)',
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: pt20,
      marginTop: 10,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Image
          source={require('../../../assets/image/icon/icon_cancle_b.png')}
          style={{ height: 60, resizeMode: 'contain' }}
        />
        <Text style={styles.activeTxt}>주문취소 된 주문건입니다.</Text>
      </View>
    </View>
  );
};

export default OrderFlowCancel;
