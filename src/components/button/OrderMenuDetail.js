import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import moment from 'moment';
import OrderRequest from '@components/image/OrderRequest'
import OrderPreparing from '@components/image/OrderPreparing'
import OrderComplete from '@components/image/OrderComplete'
import OrderDenial from '@components/image/OrderDenial'
import OrderPickupDone from '@components/image/OrderPickupDone'

const OrderMenuDetail = ({ navigation, data }) => {
  const price = data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const orderDate = moment(data.createdAt).format("YYYY-MM-DD");

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
      marginBottom: 15
    },
    imgContainer: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
    },
    img: {
      width: '100%',
      height: '100%',
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

  const renderSwitch = () => {
    switch (data.status) {
      case "1":
        return <OrderRequest />;
      case "2":
        return <OrderPreparing />;
      case "3":
        return <OrderComplete />;
      case "4":
        return <OrderPickupDone />;
      case "5":
        return <OrderDenial />;
    }
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate('OrderDetail', { 'orderId': data.orderId })}>
      <View style={styles.container}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <View style={styles.imgContainer}>
            <Image source={require('../../../assets/image/croiffle_basil.jpg')} style={styles.img} />
            {renderSwitch()}
          </View>
        </View>

        <View style={{ flex: 2, marginTop: 10, position: 'relative' }}>
          <Text style={styles.fontBlack}>{data.orderName}</Text>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text style={styles.fontBlack}>픽업시간  </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.fontBlue}>{data.pickupHour}</Text>
              <Text style={styles.fontBlue}>시 </Text>
              <Text style={styles.fontBlue}>{data.pickupMinute}</Text>
              <Text style={styles.fontBlue}>분</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Text style={styles.fontGrey}>{price}원  </Text>
            <Text style={styles.fontGrey}>{orderDate}</Text>
          </View>

        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderMenuDetail;