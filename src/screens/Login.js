import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from '@styles/commonStyle'


const Login = (props) => {
  return (
    <View style={styles.topContainer}>
      <View style={{
        height: '15%',
        marginTop: '40%',
        alignItems: 'center'
      }}>
        <Image source={require('../../assets/image/logo_b.png')} style={{ height: '100%', resizeMode: 'contain' }} />
      </View>

      <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 20 }}>
        <Text style={styles.loginFont}>안녕하세요</Text>
        <Text style={styles.loginFont}>크로플키친입니다.</Text>
        <Text style={styles.loginFont2}>서비스 이용을 위해 로그인 해주세요</Text>
      </View>

      <View style={{ paddingTop: 30, paddingLeft: 20, paddingRight: 20 }}>
        <TextInput style={styles.greyInput} placeholder={"아이디"} placeholderTextColor='rgb(174, 174, 174)' autoCapitalize='none' />
      </View>
      <View style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
        <TextInput style={styles.greyInput} placeholder={"비밀번호"} placeholderTextColor='rgb(174, 174, 174)' autoCapitalize='none' />
      </View>

      <TouchableOpacity style={{ padding: 10, margin: 10 }} onPress={() => props.navigation.navigate('MainPage')}>
        <View style={styles.blueBtn}>
          <Text style={styles.btnTxtWhite}>로그인</Text>
        </View>
      </TouchableOpacity>


      <View style={{ ...styles.font4R10, alignItems: 'center', paddingTop: 15 }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Text> 아이디 찾기 </Text>
          </TouchableOpacity>
          <Text> | </Text>
          <TouchableOpacity>
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