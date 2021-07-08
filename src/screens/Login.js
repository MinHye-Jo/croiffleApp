import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import Logo from '@components/image/Logo';
import styles from '@styles/commonStyle';
import DefaultModal from '@components/modal/DefaultModal';

import { login } from '@service/auth';
import { setToken } from '@common/http';

const Login = (props) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [inputChk, setInputChk] = useState(false);

  // 모달 데이터
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');

  useEffect(() => {
    if (id && password) setInputChk(true);
    else setInputChk(false);
  }, [id, password]);

  const serviceLogin = async () => {
    const osType = DeviceInfo.getSystemName() === 'Android' ? 'ANDROID' : 'iOS';

    const { data } = await login(id, password, osType);

    if (data && data.return_code == 200) {
      setToken(data.response.token);
      console.log(data.response)
      window.userInfo = data.response;
      props.navigation.navigate('MainPage')
    }
    else {
      setModalOpen(true);
      setModalText(data.response.returnMessage);
    }
  }

  return (
    <View style={styles.topContainer}>
      <DefaultModal modalOpen={modalOpen} onClose={() => setModalOpen(false)} modalText={modalText} />

      <View style={{ marginTop: '25%' }}>
        <Logo />
      </View>

      <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 20 }}>
        <Text style={styles.loginFont}>안녕하세요</Text>
        <Text style={styles.loginFont}>크로플키친입니다.</Text>
        <Text style={styles.loginFont2}>서비스 이용을 위해 로그인 해주세요</Text>
      </View>

      <View style={{ paddingTop: 30, paddingLeft: 20, paddingRight: 20 }}>
        <TextInput style={styles.greyInput} placeholder="아이디" placeholderTextColor='rgb(174, 174, 174)' autoCapitalize='none'
          onChangeText={(e) => setId(e)} />
      </View>
      <View style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
        <TextInput style={styles.greyInput} placeholder="비밀번호" placeholderTextColor='rgb(174, 174, 174)' autoCapitalize='none'
          secureTextEntry={true}
          onChangeText={(e) => setPassword(e)} />
      </View>

      <TouchableOpacity style={{ padding: 10, margin: 10 }}
        disabled={!inputChk}
        onPress={() => serviceLogin()}>
        <View style={inputChk ? styles.blueBtn : styles.greyBtn}>
          <Text style={styles.btnTxtWhite} >로그인</Text>
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