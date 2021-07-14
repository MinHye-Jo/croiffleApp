import React, { useState } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const CustomCheckBox = ({ checked, onChange, disabled }) => {
  const styles = StyleSheet.create({
    container: {
      resizeMode: 'contain',
      width: 25,
      height: 25,
      marginLeft: 10,
      marginRight: 10
    },
  });
  const disableFlag = disabled ? disabled : false;

  const image = checked ?
    require('../../../assets/image/icon/icon_check_b.png') :
    require('../../../assets/image/icon/icon_check_g.png');

  return (
    <TouchableOpacity activeOpacity={.5} disabled={disableFlag} onPress={() => onChange(!checked)}>
      <Image source={image} style={styles.container} />
    </TouchableOpacity>
  );
};

export default CustomCheckBox;