import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from '@styles/commonStyle'


const FindId = (props) => {
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
        <Text style={styles.loginFont}>아이디 찾기</Text>
        <Text style={styles.loginFont2}>회원가입 시 입력한 이름과</Text>
        <Text style={styles.loginFont2}>휴대폰 번호를 입력해주세요.</Text>
      </View>

      <View style={{ paddingTop: 30, paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{ ...styles.font5M15, marginBottom: 10 }}> 이름 </Text>
        <TextInput style={{ ...styles.greyInput }} />
      </View>
      <View style={{ marginTop: 20, paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{ ...styles.font5M15, marginBottom: 10 }}> 휴대폰번호 </Text>
        <TextInput style={styles.greyInput} autoCapitalize='none' />
      </View>

      <TouchableOpacity style={{ marginLeft: 20, marginRight: 20, marginTop: 30 }}
        onPress={() => props.navigation.navigate('MainPage')}>
        <View style={styles.blueBtn}>
          <Text style={styles.btnTxtWhite}>다음</Text>
        </View>
      </TouchableOpacity>
    </View >

  );
};

export default FindId;