import React, { useState, useEffect } from 'react';

import { ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

import styles from 'styles/commonStyle';
import TextInputMask from 'components/TextInputMask';
import DefaultModal from 'components/modal/DefaultModal';
import DefaultActionModal from 'components/modal/DefaultActionModal';
import validateHook from 'hook/validateHook';
import { useResetRecoilState } from 'recoil';
import { noticeListState } from 'store/app';

import { modifyPassword, logout } from 'services/auth';

const PasswordEdit = props => {
  // 회원가입 데이터
  const [pwdInfo, setPwdInfo] = useState({
    id: window.userInfo.id,
    password: '',
    passwordNew: '',
    pwdConf: '',
  });
  const [pwdChkFailMsg, setPwdChkFailMsg] = useState('');
  const [hideChkMsg, setHideChkMsg] = useState(false);
  const [inputChk, setInputChk] = useState(false);

  // 유효성 검사 모델 바인드
  const [model, isValidate] = validateHook();

  // 모달 데이터
  const [actModalOpen, setActModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');

  // 리코일 데이터 리셋
  const resetData = useResetRecoilState(noticeListState);

  // 데이터 변경 체크
  useEffect(() => {
    let emptyChk = true;
    for (const key in pwdInfo) {
      if (pwdInfo[key] == '') {
        emptyChk = false;
        break;
      }
    }

    // 회원가입 버튼 제어
    if (isValidate() && !pwdChkFailMsg && emptyChk) {
      setInputChk(true);
    } else {
      setInputChk(false);
    }
  }, [pwdInfo]);

  // 입력 데이터 셋
  const updateInput = (key, value) => {
    const pwdMap = {
      passwordNew: 'pwdConf',
      pwdConf: 'passwordNew',
    };

    // 신규 비밀번호와 비밀번호 확인 비교
    if (key == 'passwordNew' || key == 'pwdConf') {
      if (pwdInfo.pwdConf && pwdInfo[pwdMap[key]] !== value) {
        setPwdChkFailMsg('비밀번호가 일치하지 않습니다.');
        setHideChkMsg(true);
      } else {
        setPwdChkFailMsg('');
        setHideChkMsg(false);
      }
    }

    setPwdInfo({
      ...pwdInfo,
      [key]: value,
    });
  };

  const modifyPwdApi = async () => {
    // 유효 데이터만 사용
    const params = { ...pwdInfo };
    delete params.pwdConf;

    const { data } = await modifyPassword(params);

    if (data && data.return_code == 200) {
      setActModalOpen(true);
    } else {
      setModalOpen(true);
      setModalTitle('비밀번호 수정실패');
      setModalText(data.return_message);
    }
  };

  // 비밀번호 수정 후 로그아웃 및 데이터 초기화
  const logoutAction = async () => {
    await logout();
    // 토픽 해제
    const topic = `croiffle-order-employee-${userInfo.shopId}`;
    messaging().unsubscribeFromTopic(topic);

    // 데이터 리셋
    await AsyncStorage.removeItem('token');
    resetData();
    window.userInfo = null;
    props.navigation.navigate('LoginPage');
  };

  return (
    <ScrollView style={styles.topContainer} showsVerticalScrollIndicator={false}>
      <DefaultModal
        modalOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        modalText={modalText}
      />

      <DefaultActionModal
        modalOpen={actModalOpen}
        onClose={() => setActModalOpen(false)}
        onAction={() => logoutAction()}
        title="비밀번호 수정"
        modalText="비밀번호 수정이 완료되었습니다."
      />

      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{ ...styles.font5M15, marginTop: 40, marginBottom: 10 }}> 현재 비밀번호 </Text>
        <TextInput style={styles.greyInput} secureTextEntry={true} onChangeText={e => updateInput('password', e)} />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 신규 비밀번호 </Text>
        <TextInputMask
          type="pwd"
          model={model}
          name="pwd"
          macthFlag={true}
          value={pwdInfo.password}
          maxLength={50}
          changeText={e => updateInput('passwordNew', e)}
          secureTextEntry={true}
          placeholder="숫자와 영문 대,소문자를 포함하여 6자리 이상"
        />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 비밀번호 확인 </Text>
        <TextInputMask
          type="pwd"
          model={model}
          name="pwdConf"
          macthFlag={true}
          value={pwdInfo.pwdConf}
          maxLength={50}
          changeText={e => updateInput('pwdConf', e)}
          secureTextEntry={true}
          hideChkMsg={hideChkMsg}
          placeholder="한번 더 입력해주세요"
        />
        {pwdChkFailMsg ? <Text style={styles.errText}>{pwdChkFailMsg} </Text> : null}

        <TouchableOpacity style={{ marginTop: 40 }} disabled={!inputChk} onPress={modifyPwdApi}>
          <View style={inputChk ? styles.blueBtn : styles.greyBtn}>
            <Text style={styles.btnTxtWhite}>저장</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PasswordEdit;
