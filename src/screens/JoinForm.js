import React from 'react';

import {
  ScrollView,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from '@styles/commonStyle';

import TextInputMask from '@components/TextInputMask';
import StoreSeelctList from '@components/StoreSeelctList';


const JoinForm = (props) => {

  return (
    <ScrollView style={styles.topContainer}>
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{ ...styles.font5M15, marginTop: 40, marginBottom: 10 }}> 근무매장 </Text>
        <StoreSeelctList />
        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 아이디 </Text>
        <TextInputMask />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 비밀번호 </Text>
        <TextInputMask />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 비밀번호 확인 </Text>
        <TextInputMask />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 이름 </Text>
        <TextInput style={{ ...styles.greyInput, marginRight: 20 }} />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 휴대폰번호 </Text>
        <View style={styles.row}>
          <TextInput style={{ ...styles.greyInput, flex: 1.5 }} />
          <View style={{ ...styles.blueBtn, flex: 1, marginLeft: 10 }}>
            <Text style={styles.btnTxtWhite}>인증번호 발송</Text>
          </View>
        </View>
        <View style={styles.row}>
          <TextInput style={{ ...styles.greyInput, flex: 1.5, marginTop: 10 }} />
          <View style={{ ...styles.blueBtn, flex: 1, marginLeft: 10, marginTop: 10 }}>
            <Text style={styles.btnTxtWhite}>인증번호 확인</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => props.navigation.navigate('JoinConfirmPage')}>
          <View style={{ ...styles.blueBtn, marginTop: 30, marginBottom: 40 }}>
            <Text style={styles.btnTxtWhite}>회원가입</Text>
          </View>
        </TouchableOpacity>
      </View >
    </ScrollView>
  );
};

export default JoinForm;