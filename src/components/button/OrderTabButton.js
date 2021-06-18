import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const OrderTabButton = () => {
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
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 15,
    },
    activeTxt: {
      color: '#fff',
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 15,
    }
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.active}>
        <View >
          <Text style={styles.activeTxt}>신규  2</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab}>
        <View>
          <Text style={styles.txt}>준비중  2</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab}>
        <View>
          <Text style={styles.txt}>완료 10</Text>
        </View>
      </TouchableOpacity >

      <TouchableOpacity style={styles.tab}>
        <View>
          <Text style={styles.txt}>거부  2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OrderTabButton;