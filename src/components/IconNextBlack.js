import React from 'react';
import { StyleSheet, Image } from 'react-native';

const IconNextBlack = () => {
  const styles = StyleSheet.create({
    container: {
      resizeMode: 'contain',
      width: 25,
      height: 25
    },
  });

  return (
    <Image source={require('../../assets/image/icon/icon_next_b.png')} style={styles.container} />
  );
};

export default IconNextBlack;