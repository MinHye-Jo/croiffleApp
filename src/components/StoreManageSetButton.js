
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styles from '@styles/commonStyle'

const StoreManageSetButton = ({ navigation }) => {

  const styles2 = StyleSheet.create({
    container: {
      marginRight: 10,
      width: 80,
      alignItems: 'center',
      height: 30,
      justifyContent: 'center',
      borderRadius: 5,
      borderColor: 'rgb(242, 243, 245)',
      backgroundColor: 'rgb(242, 243, 245)',
    },
  });

  return (
    <View style={styles2.container}>
      <Text style={styles.font5M15}> 설정하기 </Text>
    </View>
  );
};

export default StoreManageSetButton;