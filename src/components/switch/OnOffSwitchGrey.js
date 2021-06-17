import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const OnOffSwitchGrey = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginRight: 10
    },
    onBtn: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(0, 191, 213)',
      borderRadius: 5,
      height: 30,
      width: 40
    },
    onTxt: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 15,
      color: '#ffff'
    },
    offBtn: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(242, 243, 245)',
      borderRadius: 5,
      height: 30,
      width: 40
    },
    offTxt: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 15,
      color: 'rgb(174, 174, 174)'
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.onBtn}>
          <Text style={styles.onTxt}>켜짐</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.offBtn}>
          <Text style={styles.offTxt}>켜짐</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OnOffSwitchGrey;