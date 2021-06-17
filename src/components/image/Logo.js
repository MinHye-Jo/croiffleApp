import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Logo = () => {

  const styles = StyleSheet.create({
    container: {
      height: 130,
      marginTop: '15%',
      alignItems: 'center'
    },
    imageInit: {
      height: '100%',
      resizeMode: 'contain'
    }
  });

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/image/logo_b.png')} style={styles.imageInit} />
    </View>
  );
};

export default Logo;