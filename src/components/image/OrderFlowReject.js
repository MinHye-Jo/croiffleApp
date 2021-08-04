import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { pt15 } from 'styles/fontSizePack';

const OrderFlowReject = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      height: 30,
      justifyContent: 'center',
    },
    viewContainer: {
      flex: 1,
      alignItems: 'center',
    },
    activeTxt: {
      color: 'rgb(0, 191, 213)',
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: pt15,
      marginTop: 10,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Image
          source={require('../../../assets/image/icon/icon_denial_b.png')}
          style={{ height: 35, resizeMode: 'contain' }}
        />
        <Text style={styles.activeTxt}>주문하신 음식이 주문거부되었습니다</Text>
      </View>
    </View>
  );
};

export default OrderFlowReject;
