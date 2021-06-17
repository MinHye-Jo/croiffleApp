import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import styles from '@styles/commonStyle';
import Logo from '@components/image/Logo';


const FindPassword = (props) => {
  return (
    <ScrollView style={styles.topContainer}>
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Logo />
        <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 20 }}>
          <Text style={styles.loginFont}>비밀번호 찾기</Text>
          <Text style={styles.loginFont2}>휴대폰 인증을 통해 초기화된 비밀번호를</Text>
          <Text style={styles.loginFont2}>등록된 휴대폰 번호로 보내드립니다.</Text>
          <Text style={styles.loginFont2}>로그인 후 [개인정보관리]에서 변경하실 수 있습니다.</Text>
        </View>

        <View style={{ paddingTop: 30 }}>
          <Text style={{ ...styles.font5M15, marginBottom: 10 }}> 아이디 </Text>
          <TextInput style={{ ...styles.greyInput }} />
        </View>
        <View style={{ paddingTop: 30 }}>
          <Text style={{ ...styles.font5M15, marginBottom: 10 }}> 이름 </Text>
          <TextInput style={{ ...styles.greyInput }} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ ...styles.font5M15, marginBottom: 10 }}> 휴대폰번호 </Text>
          <View style={styles.row}>
            <TextInput style={{ ...styles.greyInput, flex: 1.5 }} />
            <View style={{ ...styles.blueBtn, flex: 1, marginLeft: 10 }}>
              <Text style={styles.btnTxtWhite}>인증번호 발송</Text>
            </View>
          </View>
          <View style={styles.row}>
            <TextInput style={{ ...styles.greyInput, flex: 1.5, marginTop: 10 }} placeholder="인증번호를 입력해주세요" placeholderTextColor='rgb(174, 174, 174)' />
            <View style={{ ...styles.blueBtn, flex: 1, marginLeft: 10, marginTop: 10 }}>
              <Text style={styles.btnTxtWhite}>인증번호 확인</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={{ marginTop: 30, marginBottom: 30 }}
          onPress={() => props.navigation.navigate('MainPage')}>
          <View style={styles.blueBtn}>
            <Text style={styles.btnTxtWhite}>비밀번호 찾기</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView >

  );
};

export default FindPassword;