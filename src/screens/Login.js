import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from '@styles/commonStyle';
import Logo from '@components/image/Logo';


const Login = (props) => {
  return (
    <View style={styles.topContainer}>
      <View style={{ marginTop: '25%' }}>
        <Logo />
      </View>

      <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 20 }}>
        <Text style={styles.loginFont}>안녕하세요</Text>
        <Text style={styles.loginFont}>크로플키친입니다.</Text>
        <Text style={styles.loginFont2}>서비스 이용을 위해 로그인 해주세요</Text>
      </View>

      <View style={{ paddingTop: 30, paddingLeft: 20, paddingRight: 20 }}>
        <TextInput style={styles.greyInput} placeholder="아이디" placeholderTextColor='rgb(174, 174, 174)' autoCapitalize='none' />
      </View>
      <View style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
        <TextInput style={styles.greyInput} placeholder="비밀번호" placeholderTextColor='rgb(174, 174, 174)' autoCapitalize='none' />
      </View>

      <TouchableOpacity style={{ padding: 10, margin: 10 }} onPress={() => props.navigation.navigate('MainPage')}>
        <View style={styles.blueBtn}>
          <Text style={styles.btnTxtWhite}>로그인</Text>
        </View>
      </TouchableOpacity>


      <View style={{ ...styles.font4R10, alignItems: 'center', paddingTop: 15 }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('FindId')}>
            <Text> 아이디 찾기 </Text>
          </TouchableOpacity>
          <Text> | </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('FindPassword')} >
            <Text> 비밀번호 찾기 </Text>
          </TouchableOpacity>
          <Text> | </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('JoinPage')}>
            <Text> 회원가입 </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >


  );
};

export default Login;