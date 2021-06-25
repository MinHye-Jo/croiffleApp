import React, { useState } from 'react';

import {
  ScrollView,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from '@styles/commonStyle';
import TextInputMask from '@components/TextInputMask';
import StoreSeelctList from '@components/selection/StoreSeelctList';
import DefaultModal from '@components/modal/DefaultModal';
import validateHook from '@hook/validateHook'

import { join, sendAuthCode } from '@service/auth';

const JoinForm = (props) => {
  // 회원가입 데이터
  const [signUpInfo, setSignUpInfo] = useState({
    id: '',
    name: '',
    password: '',
    pwdConf: '',
    phoneNumber: '',
    termsPrivacy: 1,
    termsUser: 1
  });

  // 입력 데이터 유효성 검사용 데이터
  const [modifyPhone, setModifyPhone] = useState(false);
  const [passwordConfirmFail, setPasswordConfirmFail] = useState('');
  const [checkedPassword, setCheckedPassword] = useState(false);
  const [checkedPhone, setCheckedPhone] = useState(false);

  // 모달 데이터
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');

  // 유효성 검사 모델 바인드
  const [model, isValidate] = validateHook();

  const updateInput = (key, value) => {

    // 비밀번호 유효성 체크
    if (!isValidate("pwd")) {
      setCheckedPassword(false);
    }

    // 신규 비밀번호와 비밀번호 확인 비교
    if (key == "pwd" || key == "pwdConf") {
      if (signUpInfo.password !== signUpInfo.pwdConf) {
        setPasswordConfirmFail("비밀번호가 일치하지 않습니다.");
        setCheckedPassword(false);
      } else {
        setPasswordConfirmFail("");
        setCheckedPassword(true);
      }
    }

    // 휴대폰번호 수정시 
    if (key == "phoneNumber") setModifyPhone(true);

    setSignUpInfo({
      ...signUpInfo,
      [key]: value
    })
  }

  const authCodeApi = async () => {
    const re = await sendAuthCode("010-9927-3112");

    console.log('============인즈으으으으으ㅡ응ㅇㅇㅇㅇ========');
    console.log(re);
  }

  const joinEmployee = async () => {
    console.log('===============1111========');
    console.log(signUpInfo);

    // for (const key in signUpInfo) {
    //   console.log(signUpInfo[key]);
    //   if (!signUpInfo[key]) {
    //     setModalOpen(true);
    //     setModalText("누락된 항목이 있습니다.");
    //     break;
    //   }
    // };


    // 휴대폰 인증 
    if (modifyPhone && !checkedPhone) {
      setModalOpen(true);
      setModalText('휴대폰 인증을 완료해주세요');
      return false;
    }

    const params = { ...signUpInfo.pwdConf };
    delete params.pwdConf;

    // const re = await join(params);



    // if (re.data) {
    //   // 성공~~ 리다이렉트
    //   setJwtToken(re.token);
    // props.navigation.navigate('JoinConfirmPage')
    // }
    // else {
    //   // 실패~~
    //   // 실패메세지 처리 ?? 

    // }
  }


  return (
    <ScrollView style={styles.topContainer}>
      <DefaultModal modalOpen={modalOpen} onClose={() => setModalOpen(false)} modalText={modalText} />

      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{ ...styles.font5M15, marginTop: 40, marginBottom: 10 }}> 근무매장 </Text>
        <StoreSeelctList />

        <Text style={{ ...styles.font5M15, marginTop: 20, marginBottom: 10 }}> 아이디 </Text>
        <TextInputMask
          type="email"
          model={model}
          name="email"
          macthFlag={true}
          value={signUpInfo.email}
          maxLength={50}
          changeText={e => updateInput('email', e)}
        />

        <Text style={{ ...styles.font5M15, marginTop: 20, marginBottom: 10 }}> 비밀번호 </Text>
        <TextInputMask
          type="pwd"
          model={model}
          name="pwd"
          macthFlag={true}
          value={signUpInfo.email}
          maxLength={50}
          changeText={e => updateInput('pwd', e)}
          secureTextEntry={true}
        />

        <Text style={{ ...styles.font5M15, marginTop: 20, marginBottom: 10 }}> 비밀번호 확인 </Text>
        <TextInputMask
          type="pwd"
          model={model}
          name="pwdConf"
          macthFlag={true}
          value={signUpInfo.email}
          maxLength={50}
          changeText={e => updateInput('pwdConf', e)}
          secureTextEntry={true}
        />
        <Text style={styles.errText}>{passwordConfirmFail}</Text>

        <Text style={{ ...styles.font5M15, marginTop: 20, marginBottom: 10 }}> 이름 </Text>
        <TextInput style={{ ...styles.greyInput }} />

        <Text style={{ ...styles.font5M15, marginTop: 20, marginBottom: 10 }}> 휴대폰번호 </Text>
        <View style={styles.row}>
          <TextInput style={{ ...styles.greyInput, flex: 1.5 }} />
          <TouchableOpacity style={{ ...styles.blueBtn, flex: 1, marginLeft: 10 }} onPress={authCodeApi}>
            <Text style={styles.btnTxtWhite}>인증번호 발송</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.row}>
          <TextInput style={{ ...styles.greyInput, flex: 1.5, marginTop: 10 }} />
          <View style={{ ...styles.blueBtn, flex: 1, marginLeft: 10, marginTop: 10 }}>
            <Text style={styles.btnTxtWhite}>인증번호 확인</Text>
          </View>
        </View>

        <TouchableOpacity onPress={joinEmployee}>
          <View style={{ ...styles.blueBtn, marginTop: 30, marginBottom: 40 }}>
            <Text style={styles.btnTxtWhite}>회원가입</Text>
          </View>
        </TouchableOpacity>
      </View >
    </ScrollView>
  );
};

export default JoinForm;