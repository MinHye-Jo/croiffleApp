import React from 'react';
import { StyleSheet, Image } from 'react-native';

const CustomCheckBox = () => {
  const styles = StyleSheet.create({
    container: {
      resizeMode: 'contain',
      width: 25,
      height: 25,
      marginLeft: 10,
      marginRight: 10
    },
  });

  return (
    <Image source={require('../../assets/image/icon/icon_check_g.png')} style={styles.container} />
  );
};

export default CustomCheckBox;