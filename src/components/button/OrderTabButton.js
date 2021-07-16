import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const OrderTabButton = ({ onClick, orderCnt }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 50,
      fontSize: 20,
      backgroundColor: 'rgb(239, 240, 239)',
      borderRadius: 30
    },
    tab: {
      width: '25%',
      borderRadius: 30,
      alignItems: 'center',
    },
    active: {
      width: '25%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(0, 191, 213)',
      borderRadius: 50,
      height: '100%'
    },
    txt: {
      color: 'black',
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 15,
    },
    activeTxt: {
      color: '#fff',
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 15,
    }
  });

  const [status, setStatus] = useState("1");

  const tabClickAction = (status) => {
    setStatus(status);
    onClick(status);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={status == "1" ? styles.active : styles.tab} onPress={() => tabClickAction("1")}>
        <View >
          <Text style={status == "1" ? styles.activeTxt : styles.txt}>신규  {orderCnt.reqCnt}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={status == "2" ? styles.active : styles.tab} onPress={() => tabClickAction("2")}>
        <View>
          <Text style={status == "2" ? styles.activeTxt : styles.txt}>준비중  {orderCnt.preCnt}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={status == "3" ? styles.active : styles.tab} onPress={() => tabClickAction("3")}>
        <View>
          <Text style={status == "3" ? styles.activeTxt : styles.txt}>준비완료 {orderCnt.comCnt}</Text>
        </View>
      </TouchableOpacity >

      <TouchableOpacity style={status == "4" ? styles.active : styles.tab} onPress={() => tabClickAction("4")}>
        <View>
          <Text style={status == "4" ? styles.activeTxt : styles.txt}>픽업완료  {orderCnt.doneCnt}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OrderTabButton;