import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const OrderFlow = () => {

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
    txt: {
      color: 'rgb(174, 174, 174)',
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 14,
      marginTop: 10
    },
    activeTxt: {
      color: 'rgb(0, 191, 213)',
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 14,
      marginTop: 10
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Image source={require('../../../assets/image/icon/icon_step1_b.png')} style={{ height: 35, resizeMode: 'contain' }} />
        <Text style={styles.activeTxt}>주문요청중</Text>
      </View>
      <Image source={require('../../../assets/image/icon/icon_next_g.png')} style={{ width: 25, resizeMode: 'contain' }} />

      <View style={styles.viewContainer}>
        <Image source={require('../../../assets/image/icon/icon_step2_g.png')} style={{ height: 35, resizeMode: 'contain' }} />
        <Text style={styles.txt}>준비중</Text>
      </View>
      <Image source={require('../../../assets/image/icon/icon_next_g.png')} style={{ width: 25, resizeMode: 'contain' }} />

      <View style={styles.viewContainer}>
        <Image source={require('../../../assets/image/icon/icon_step2_g.png')} style={{ height: 35, resizeMode: 'contain' }} />
        <Text style={styles.txt}>준비완료</Text>
      </View>
      <Image source={require('../../../assets/image/icon/icon_next_g.png')} style={{ width: 25, resizeMode: 'contain' }} />

      <View style={styles.viewContainer}>
        <Image source={require('../../../assets/image/icon/icon_step4_g.png')} style={{ height: 35, resizeMode: 'contain' }} />
        <Text style={styles.txt}>픽업완료</Text>
      </View>
    </View>
  );
};

export default OrderFlow;