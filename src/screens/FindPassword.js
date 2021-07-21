import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import styles from 'styles/commonStyle';
import Logo from 'components/image/Logo';

import DefaultModal from 'components/modal/DefaultModal';
import FindPwdModal from 'components/modal/FindPwdModal';

import { sendAuthCode, confirmAuthCodeSendPwd } from 'services/auth';

const FindPassword = props => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [phoneChk, setPhoneChk] = useState(false);

  // 모달 데이터
  const [findPwdModalOpen, setFindPwdModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalTextSec, setModalTextSec] = useState('');
  const [modalTextThi, setModalTextThi] = useState('');

  // 휴대폰 번호 수정
  const chkPhoneNumber = async e => {
    setPhoneChk(false);
    const value = e.replace(/(\d{3})(-*)(\d{4})(-*)(\d{4})/, '$1-$3-$5');
    setPhoneNumber(value);
  };

  // 인증번호 발송
  const sendAuthCodePwdApi = async () => {
    const re = await sendAuthCode(phoneNumber, id);

    if (re.data && re.data.return_code == 200) {
      setPhoneChk(true);
      setModalData(
        '인증번호 발송',
        '입력하신 번호로 인증번호가 발송되었습니다.',
        '인증번호가 오지 않을 경우',
        '입력하신 번호가 정확한지 확인하여 주세요.',
      );
    } else {
      setPhoneChk(false);
      setModalData('인증번호 발송 실패', re.data.return_message);
    }
  };

  // 인증번호 확인
  const confirmAuthCodeApi = async () => {
    if (!id) {
      setModalData('휴대폰번호 인증', '아이디를 입력해주세요');
      return;
    }

    if (!name) {
      setModalData('휴대폰번호 인증', '이름을 입력해주세요');
      return;
    }

    const re = await confirmAuthCodeSendPwd(id, phoneNumber, authCode);

    if (re.data && re.data.return_code == 200) {
      setFindPwdModalOpen(true);
    } else {
      setModalData('휴대폰번호 인증 실패', re.data.return_message);
    }
  };

  // 모달 데이터처리 공통함수
  const setModalData = (title, txt1, txt2, txt3) => {
    setModalOpen(true);
    setModalTitle(title || '');
    setModalText(txt1 || '');
    setModalTextSec(txt2 || '');
    setModalTextThi(txt3 || '');
  };

  return (
    <ScrollView style={styles.topContainer}>
      <DefaultModal
        modalOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        modalText={modalText}
        modalTextSec={modalTextSec}
        modalTextThi={modalTextThi}
      />
      <FindPwdModal
        modalOpen={findPwdModalOpen}
        navigation={props.navigation}
        onClose={() => setFindPwdModalOpen(false)}
      />

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
          <TextInput style={{ ...styles.greyInput }} onChangeText={e => setId(e)} />
        </View>

        <View style={{ paddingTop: 30 }}>
          <Text style={{ ...styles.font5M15, marginBottom: 10 }}> 이름 </Text>
          <TextInput style={{ ...styles.greyInput }} onChangeText={e => setName(e)} />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ ...styles.font5M15, marginBottom: 10 }}> 휴대폰번호 </Text>
          <View style={styles.row}>
            <TextInput
              style={{ ...styles.greyInput, flex: 1.5 }}
              value={phoneNumber}
              onChangeText={e => chkPhoneNumber(e)}
            />
            <TouchableOpacity
              style={{ flex: 1, marginLeft: 10 }}
              disabled={phoneNumber && id ? false : true}
              onPress={sendAuthCodePwdApi}>
              <View style={phoneNumber && id ? styles.blueBtn : styles.greyBtn}>
                <Text style={styles.btnTxtWhite}>인증번호 발송</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TextInput
              style={{ ...styles.greyInput, flex: 1.5, marginTop: 10 }}
              placeholder="인증번호를 입력해주세요"
              placeholderTextColor="rgb(174, 174, 174)"
              onChangeText={e => setAuthCode(e)}
            />
            <TouchableOpacity
              style={{ flex: 1, marginLeft: 10, marginTop: 10 }}
              disabled={phoneChk && authCode ? false : true}
              onPress={confirmAuthCodeApi}>
              <View style={phoneChk && authCode ? styles.blueBtn : styles.greyBtn}>
                <Text style={styles.btnTxtWhite}>인증번호 확인</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FindPassword;
