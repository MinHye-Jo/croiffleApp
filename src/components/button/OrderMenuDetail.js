import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import OrderRequest from '@components/image/OrderRequest'

const OrderMenuDetail = ({ navigation }) => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#ffffff',
      shadowColor: 'grey',
      shadowOpacity: 0.5,
      shadowOffset: { width: 0.5, height: 0.5 },
      elevation: 3,
      borderRadius: 5,
      padding: 15,
      margin: 20
    },
    imgContainer: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      paddingLeft: 5,
      paddingRight: 5,
    },
    img: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      borderRadius: 5,
      position: 'absolute',
    },
    fontBlack: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 15
    },
    fontBlue: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 15,
      color: 'rgb(0, 191, 213)'
    },
    fontGrey: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 15,
      color: 'rgb(174, 174, 174)'
    }
  });

  return (
    // <TouchableOpacity onPress={() => navigation.navigate('OrderHistory')}>
    <TouchableOpacity >
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={require('../../../assets/image/croiffle_basil.jpg')} style={styles.img} />
          <OrderRequest />
        </View>

        <View style={{ marginLeft: 10, marginTop: 10, position: 'relative' }}>
          <Text style={styles.fontBlack}>플레인 크로플 외 1</Text>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text style={styles.fontBlack}>픽업시간  </Text>
            <Text style={styles.fontBlue}>11시 30분</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Text style={styles.fontGrey}>125,000원  </Text>
            <Text style={styles.fontGrey}>2021.05.20 15:30</Text>
          </View>

        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderMenuDetail;