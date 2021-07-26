import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const OrderFlow = ({ orderStatus }) => {
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
      fontSize: 13,
      marginTop: 10,
    },
    activeTxt: {
      color: 'rgb(0, 191, 213)',
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 13,
      marginTop: 10,
    },
  });

  const img1 =
    orderStatus == '1'
      ? require('../../../assets/image/icon/icon_step1_b.png')
      : require('../../../assets/image/icon/icon_step1_g.png');

  const img2 =
    orderStatus == '2'
      ? require('../../../assets/image/icon/icon_step2_b.png')
      : require('../../../assets/image/icon/icon_step2_g.png');

  const img3 =
    orderStatus == '3'
      ? require('../../../assets/image/icon/icon_step3_b.png')
      : require('../../../assets/image/icon/icon_step3_g.png');

  const img4 =
    orderStatus == '4'
      ? require('../../../assets/image/icon/icon_step4_b.png')
      : require('../../../assets/image/icon/icon_step4_g.png');

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Image source={img1} style={{ height: 35, resizeMode: 'contain' }} />
        <Text style={orderStatus == '1' ? styles.activeTxt : styles.txt}>주문요청중</Text>
      </View>
      <Image
        source={require('../../../assets/image/icon/icon_next_g.png')}
        style={{ width: 25, resizeMode: 'contain' }}
      />

      <View style={styles.viewContainer}>
        <Image source={img2} style={{ height: 35, resizeMode: 'contain' }} />
        <Text style={orderStatus == '2' ? styles.activeTxt : styles.txt}>준비중</Text>
      </View>
      <Image
        source={require('../../../assets/image/icon/icon_next_g.png')}
        style={{ width: 25, resizeMode: 'contain' }}
      />

      <View style={styles.viewContainer}>
        <Image source={img3} style={{ height: 35, resizeMode: 'contain' }} />
        <Text style={orderStatus == '3' ? styles.activeTxt : styles.txt}>준비완료</Text>
      </View>
      <Image
        source={require('../../../assets/image/icon/icon_next_g.png')}
        style={{ width: 25, resizeMode: 'contain' }}
      />

      <View style={styles.viewContainer}>
        <Image source={img4} style={{ height: 35, resizeMode: 'contain' }} />
        <Text style={orderStatus == '4' ? styles.activeTxt : styles.txt}>픽업완료</Text>
      </View>
    </View>
  );
};

export default OrderFlow;
