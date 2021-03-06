import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import moment from 'moment';
import { pt12, pt15 } from 'styles/fontSizePack';

const NoticeListDetail = ({ navigation, data }) => {
  const today = moment();
  const timeValue = moment(data.createdAt).format('YYYY-MM-DD HH:mm:ss');
  const betweenTime = moment.duration(today.diff(timeValue)).asMinutes();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 15,
      borderBottomColor: 'rgb(225, 225, 225)',
      borderBottomWidth: 1,
    },
    blueBox: {
      backgroundColor: 'rgb(0, 191, 213)',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      width: '13%',
      height: '100%',
    },
    fontWhite: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: pt12,
      color: '#fff',
    },
    fontBlack: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: pt15,
    },
    font4Black: {
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: pt15,
    },
    font4Grey: {
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: pt12,
      color: 'rgb(174, 174, 174)',
    },
  });

  return (
    <TouchableOpacity onPress={() => navigation.navigate('OrderDetail', { orderId: data.orderId })}>
      <View style={styles.container}>
        <View style={{ flex: 1.5, flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.blueBox}>
            <Text style={styles.fontWhite}>알림</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.fontBlack}>{window.userInfo.shopName}</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.font4Grey}>{Math.floor(betweenTime)}분전</Text>
          </View>
        </View>
        <View style={{ flex: 1, marginTop: 10 }}>
          <Text style={styles.font4Black}>새로운 주문이 들어왔습니다.</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NoticeListDetail;
