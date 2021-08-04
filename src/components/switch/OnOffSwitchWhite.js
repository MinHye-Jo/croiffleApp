import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { pt15 } from 'styles/fontSizePack';

const OnOffSwitchWhite = ({ onClick, flagVal }) => {
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
      fontSize: pt15,
      color: '#ffff',
    },
    offBtn: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: 5,
      height: 30,
      width: 40,
    },
    offTxt: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: pt15,
      color: 'rgb(174, 174, 174)',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onClick(1)}>
        <View style={flagVal == 1 ? styles.onBtn : styles.offBtn}>
          <Text style={flagVal == 1 ? styles.onTxt : styles.offTxt}>켜짐</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onClick(0)}>
        <View style={flagVal == 0 ? styles.onBtn : styles.offBtn}>
          <Text style={flagVal == 0 ? styles.onTxt : styles.offTxt}>꺼짐</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OnOffSwitchWhite;
