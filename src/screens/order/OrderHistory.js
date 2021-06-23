import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import styles from '@styles/commonStyle';
import OrderTabButton from '@components/button/OrderTabButton';
import OrderMenuDetail from '@components/button/OrderMenuDetail';


const OrderHistory = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#fff', padding: 20 }}>
        <OrderTabButton />
      </View>
      <ScrollView style={{ backgroundColor: 'rgb(242, 243, 245)' }}>
        <View style={{ padding: 20 }}>
          <OrderMenuDetail navigation={props.navigation} />
          <OrderMenuDetail navigation={props.navigation} />
        </View >
      </ScrollView>
    </View >
  );
};

export default OrderHistory;