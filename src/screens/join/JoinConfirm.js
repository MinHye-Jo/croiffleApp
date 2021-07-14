import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from 'styles/commonStyle';
import Logo from 'components/image/Logo';

const JoinConfirm = (props) => {

  return (
    <View style={styles.topContainer}>
      <Logo />

      <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 20 }}>
        <Text style={styles.loginFont}>회원가입 완료!</Text>
        <Text style={styles.loginFont2}>관리자 승인 후 알려드립니다.</Text>
        <Text style={styles.loginFont2}>승인 후 로그인이 가능합니다.</Text>
      </View>

      <TouchableOpacity onPress={() => props.navigation.navigate('LoginPage')}>
        <View style={{ ...styles.blueBtn, margin: 20, marginTop: 40 }}>
          <Text style={styles.btnTxtWhite}>로그인 하기</Text>
        </View>
      </TouchableOpacity>
    </View >
  );
};

export default JoinConfirm;