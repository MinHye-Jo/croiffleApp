import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const SaleSoldoutSwitch = ({ onClick, data, flagVal }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginRight: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
    },
    onBtn: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(0, 191, 213)',
      borderRadius: 5,
      height: 30,
      width: 40,
    },
    onTxt: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 15,
      color: '#ffff',
    },
    offBtn: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 30,
      width: 40,
    },
    offTxt: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 15,
      color: 'rgb(174, 174, 174)',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onClick('sale', data)}>
        <View style={flagVal == '0' ? styles.onBtn : styles.offBtn}>
          <Text style={flagVal == '0' ? styles.onTxt : styles.offTxt}>판매</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onClick('sold', data)}>
        <View style={flagVal == '1' ? styles.onBtn : styles.offBtn}>
          <Text style={flagVal == '1' ? styles.onTxt : styles.offTxt}>품절</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SaleSoldoutSwitch;
