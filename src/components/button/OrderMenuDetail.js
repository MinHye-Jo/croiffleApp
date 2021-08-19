import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import moment from 'moment';
import OrderRequest from 'components/image/OrderRequest';
import OrderPreparing from 'components/image/OrderPreparing';
import OrderComplete from 'components/image/OrderComplete';
import OrderDenial from 'components/image/OrderDenial';
import OrderPickupDone from 'components/image/OrderPickupDone';
import OrderCancel from 'components/image/OrderCancel';
import { pt15, pt13 } from 'styles/fontSizePack';

const OrderMenuDetail = ({ navigation, data, reFreshData }) => {
  const price = data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const orderDate = moment(data.createdAt).format('YYYY-MM-DD hh:mm');
  const blockStatus = data.status == '4' || data.status == '5' ? true : false;
  const img = data.menuImgUrl ? { uri: data.menuImgUrl } : require('../../../assets/image/croiffle_basil.jpg');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: blockStatus ? '#f8f8f9' : '#ffffff',
      shadowColor: 'grey',
      shadowOpacity: 0.5,
      shadowOffset: { width: 0.5, height: 0.5 },
      elevation: 3,
      borderRadius: 5,
      padding: 15,
      marginBottom: 15,
    },
    imgContainer: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
    },
    imgBlockContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, .3)',
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: 5,
    },
    img: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
      borderRadius: 5,
      position: 'absolute',
    },
    fontBlack15: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: pt15,
    },
    fontBlack14: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: pt13,
    },
    fontBlue: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: pt13,
      color: 'rgb(0, 191, 213)',
    },
    fontGrey15: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: pt15,
      color: 'rgb(174, 174, 174)',
    },
    fontGrey14: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: pt13,
      color: 'rgb(174, 174, 174)',
    },
    fontOrange: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: pt13,
      color: 'rgb(255, 96, 1)',
    },
  });

  const renderSwitch = () => {
    switch (data.status) {
      case '1':
        return <OrderRequest />;
      case '2':
        return <OrderPreparing />;
      case '3':
        return <OrderComplete />;
      case '4':
        return <OrderPickupDone />;
      case '5':
        return <OrderDenial />;
      case '6':
      case '7':
        return <OrderCancel />;
    }
  };

  // 자식 컴포넌트한테 받은 이벤트
  const onEvent = message => {
    if (message === 'refresh') {
      reFreshData();
    }
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate('OrderDetail', { orderId: data.orderId, emit: onEvent })}>
      <View style={styles.container}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <View style={styles.imgContainer}>
            <Image source={img} style={styles.img} resizeMode="cover" />
            <View style={styles.imgBlockContainer} />
            {renderSwitch()}
          </View>
        </View>

        <View style={{ flex: 2, marginTop: 5, position: 'relative', marginBottom: 5 }}>
          <Text style={!blockStatus ? styles.fontBlack15 : styles.fontGrey15}>{data.orderName}</Text>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <View style={{ flex: 0.5 }}>
              <Text style={!blockStatus ? styles.fontBlack14 : styles.fontGrey14}>{price}원 </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={data.paymentType == 1 ? styles.fontOrange : styles.fontGrey14}>
                {data.paymentType == 1 ? '현장결제' : '결제완료'}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <View style={{ flex: 0.5 }}>
              <Text style={!blockStatus ? styles.fontBlack14 : styles.fontGrey14}>픽업시간 </Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text style={!blockStatus ? styles.fontBlue : styles.fontGrey14}>{data.pickupHour}</Text>
              <Text style={!blockStatus ? styles.fontBlue : styles.fontGrey14}>시 </Text>
              <Text style={!blockStatus ? styles.fontBlue : styles.fontGrey14}>{data.pickupMinute}</Text>
              <Text style={!blockStatus ? styles.fontBlue : styles.fontGrey14}>분</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Text style={styles.fontGrey14}>{orderDate}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderMenuDetail;
