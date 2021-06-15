import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '@styles/commonStyle';


const JoinConfirm = (props) => {

  return (
    <View style={styles.topContainer}>
      <View style={{
        height: '15%',
        marginTop: '20%',
        alignItems: 'center'
      }}>
        <Image source={require('../../assets/image/logo_b.png')} style={{ height: '100%', resizeMode: 'contain' }} />
      </View>

      <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 20 }}>
        <Text style={styles.loginFont}>회원가입 완료!</Text>
        <Text style={styles.loginFont2}>관리자 승인 후 알려드립니다.</Text>
        <Text style={styles.loginFont2}>승인 후 로그인이 가능합니다.</Text>
      </View>

      <TouchableOpacity style={{ padding: 10 }} onPress={() => props.navigation.navigate('LoginPage')}>
        <View style={styles.blueBtn}>
          <Text style={styles.btnTxtWhite}>로그인 하기</Text>
        </View>
      </TouchableOpacity>
    </View >
  );
};

export default JoinConfirm;