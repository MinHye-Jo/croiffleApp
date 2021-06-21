import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import styles from '@styles/commonStyle';
import OrderFlow from '@components/image/OrderFlow';
import OrderMenuDetail from '@components/button/OrderMenuDetail';


const OrderDetail = (props) => {
  return (
    <View style={styles.topContainer}>
      <View style={{ backgroundColor: '#fff', padding: 20, height: 100 }}>
        <OrderFlow />
      </View>
      <View style={styles.hr} />
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Text style={{ ...styles.font5M15, marginBottom: 10 }}>주문일시</Text>
          <View style={styles.greyTxtBox}>
            <Text style={styles.font4R15}> 2021.05.05 </Text>
          </View>

          <Text style={{ ...styles.font5M15, marginBottom: 10, marginTop: 20 }}>주문내역</Text>
          <View style={{ ...styles.greyBox, padding: 10 }}>
            <View style={{ ...styles.row, justifyContent: 'space-between' }}>
              <Text style={{ ...styles.font4R15, flex: 2 }}>플레인 크로플 </Text>
              <Text style={{ ...styles.font4R15, flex: 1, alignItems: 'center' }}>1 </Text>
              <Text style={{ ...styles.font4R15, right: 0 }}>4,900원 </Text>
            </View>
            <View style={{ ...styles.row, justifyContent: 'space-between', paddingTop: 10 }}>
              <Text style={{ ...styles.font4R15, flex: 2 }}> + 플레인 크로플 </Text>
              <Text style={{ ...styles.font4R15, flex: 1, alignItems: 'center' }}>1 </Text>
              <Text style={{ ...styles.font4R15, right: 0 }}>4,900원 </Text>
            </View>
            <View style={{ ...styles.hr, marginTop: 10, marginBottom: 10, marginLeft: 5, marginRight: 5 }} />

            <View style={{ ...styles.row, justifyContent: 'space-between' }}>
              <Text style={styles.font5M15}>총 주문금액</Text>
              <Text style={styles.font5M15blue}>11,300원</Text>
            </View>
          </View>

          <Text style={{ ...styles.font5M15, marginBottom: 10, marginTop: 20 }}>픽업시간</Text>
          <View style={styles.greyTxtBox}>
            <View style={styles.row}>
              <Text style={styles.font5M15blue}>11</Text>
              <Text style={styles.font5M15}> 시 </Text>
              <Text style={styles.font5M15blue}>30</Text>
              <Text style={styles.font5M15}> 분 </Text>
            </View>
          </View>

          <Text style={{ ...styles.font5M15, marginBottom: 10, marginTop: 20 }}>결제방법</Text>
          <View style={styles.greyTxtBox}>
            <Text style={styles.font4R15}> 현장결제 </Text>
          </View>

          <Text style={{ ...styles.font5M15, marginBottom: 10, marginTop: 20 }}>주문 시 요청사항</Text>
          <View style={styles.greyTxtBox}>
            <Text style={styles.font4R15}> 크로플 존맛~~~ </Text>
          </View>

          <Text style={{ ...styles.font5M15, marginBottom: 10, marginTop: 20 }}>고객연락처</Text>
          <View style={{ ...styles.greyBox, padding: 10 }}>
            <View style={{ ...styles.row }}>
              <Text style={{ ...styles.font4R15, width: '30%' }}>성함</Text>
              <Text style={{ ...styles.font4R15 }}>1 </Text>
            </View>
            <View style={{ ...styles.row, paddingTop: 10 }}>
              <Text style={{ ...styles.font4R15, width: '30%' }}>전화번호</Text>
              <Text style={{ ...styles.font4R15 }}>010-1234-5678</Text>
            </View>
          </View>
        </View >
      </ScrollView>
    </View >
  );
};

export default OrderDetail;