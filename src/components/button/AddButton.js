import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const AddButton = ({ onClick }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'rgb(255, 96, 1)',
      borderRadius: 5,
    },
    btnTxt: {
      color: '#fff',
      fontSize: 15,
      fontFamily: 'S-CoreDream-5Medium',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ padding: 8 }} onPress={() => onClick()}>
        <Text style={styles.btnTxt}>추가하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;
