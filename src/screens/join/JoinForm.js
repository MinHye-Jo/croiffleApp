import React, { useState, useEffect } from 'react';

import { ScrollView, View, TextInput, Text, TouchableOpacity } from 'react-native';

import styles from 'styles/commonStyle';
import TextInputMask from 'components/TextInputMask';
import StoreSelectList from 'components/selection/StoreSelectList';
import PositionSelectList from 'components/selection/PositionSelectList';
import DefaultModal from 'components/modal/DefaultModal';
import validateHook from 'hook/validateHook';

import { join, sendAuthCode, confirmAuthCode, checkID } from 'services/auth';

const JoinForm = props => {
  // 회원가입 데이터
  const [signUpInfo, setSignUpInfo] = useState({
    shopId: 0,
    role: 0,
    id: '',
    name: '',
    password: '',
    pwdConf: '',
    phoneNumber: '',
    authCode: '',
    termsPrivacy: 1,
    termsUser: 1,
  });

  // 입력 데이터 유효성 검사용 데이터
  const [pwdChkFailMsg, setPwdChkFailMsg] = useState('');
  const [hideChkMsg, setHideChkMsg] = useState(false);
  const [idChkFailMsg, setIdChkFailMsg] = useState('');
  const [phoneChk, setPhoneChk] = useState(false);
  const [inputChk, setInputChk] = useState(false);

  // 모달 데이터
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalTextSec, setModalTextSec] = useState('');
  const [modalTextThi, setModalTextThi] = useState('');

  // 유효성 검사 모델 바인드
  const [model, isValidate] = validateHook();

  // 데이터 변경 체크
  useEffect(() => {
    let emptyChk = true;
    for (const key in signUpInfo) {
      if (!signUpInfo[key]) {
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
  }, [signUpInfo]);

  // 입력 데이터 셋
  const updateInput = (key, value) => {
    const pwdMap = {
      password: 'pwdConf',
      pwdConf: 'password',
    };

    // 신규 비밀번호와 비밀번호 확인 비교
    if (key == 'password' || key == 'pwdConf') {
      const pwdConf = key == 'password' ? signUpInfo.pwdConf : value;

      if (pwdConf && signUpInfo[pwdMap[key]] !== value) {
        setPwdChkFailMsg('비밀번호가 일치하지 않습니다.');
        setHideChkMsg(true);
      } else {
        setPwdChkFailMsg('');
        setHideChkMsg(false);
      }
    }

    // 휴대폰번호 수정시
    if (key == 'phoneNumber') {
      // 자동 하이픈 입력
      value = value.replace(/(\d{3})(-*)(\d{4})(-*)(\d{4})/, '$1-$3-$5');
      setPhoneChk(false);
    }

    setSignUpInfo({
      ...signUpInfo,
      [key]: value,
    });
  };

  // 인증번호 발송
  const sendAuthCodeApi = async () => {
    const { data } = await sendAuthCode(signUpInfo.phoneNumber);

    if (data && data.return_code == 200) {
      setModalData(
        '인증번호 발송',
        '인증번호가 발송되었습니다.',
        '인증번호가 오지 않을 경우',
        '입력하신 번호를 확인하여 주세요.',
      );
    } else {
      setModalData('인증번호 발송 실패', data.return_message);
    }
  };

  // 인증번호 확인
  const confirmAuthCodeApi = async () => {
    const { data } = await confirmAuthCode(signUpInfo.phoneNumber, signUpInfo.authCode);

    if (data && data.return_code == 200) {
      setPhoneChk(true);
      setModalData('휴대폰번호 인증 완료', '휴대폰번호 인증이 완료되었습니다.');
    } else {
      setModalData('휴대폰번호 인증 실패', data.return_message);
    }
  };

  // 회원가입
  const joinEmployee = async () => {
    // 아이디 중복확인
    const { data: chkId } = await checkID(signUpInfo.id);
    if (chkId.return_code != 200) {
      setIdChkFailMsg('이미 사용중이거나 탈퇴한 아이디입니다.');
      setModalData('아이디 사용불가', '사용할 수 없는 아이디 입니다.', '다시 한번 확인해주십시오.');
      return;
    }

    // 휴대폰 인증
    if (!phoneChk) {
      setModalData('휴대폰번호 인증 필수', '휴대폰번호 인증을 완료해주세요.');
      return;
    }

    // 회원가입용 데이터만 사용
    const params = { ...signUpInfo };
    params.phoneNumber = params.phoneNumber.replace(/-/g, '');
    delete params.pwdConf;
    delete params.authCode;

    // 회원가입 API 호출
    const re = await join(params);
    if (re.data && re.data.return_code == 200) {
      props.navigation.navigate('JoinConfirmPage');
    } else {
      setModalData('회원가입 실패', re.data.return_message);
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
    <ScrollView style={styles.topContainer} showsVerticalScrollIndicator={false}>
      <DefaultModal
        modalOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        modalText={modalText}
        modalTextSec={modalTextSec}
        modalTextThi={modalTextThi}
      />

      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <View style={{ ...styles.row, marginTop: 40, marginBottom: 10 }}>
          <Text style={styles.font5M15}>근무매장</Text>
          <Text style={styles.font5M15blue}> (필수)</Text>
        </View>

        <View style={{ zIndex: 9999 }}>
          <StoreSelectList
            value={signUpInfo.shopId}
            onChange={shopId => {
              setSignUpInfo({ ...signUpInfo, shopId });
            }}
          />
        </View>

        <View style={{ ...styles.row, marginTop: 20, marginBottom: 10 }}>
          <Text style={styles.font5M15}>직책</Text>
          <Text style={styles.font5M15blue}> (필수)</Text>
        </View>

        <PositionSelectList
          value={signUpInfo.role}
          onChange={role => {
            setSignUpInfo({ ...signUpInfo, role });
          }}
        />

        <View style={{ ...styles.row, marginTop: 20, marginBottom: 10 }}>
          <Text style={styles.font5M15}>아이디</Text>
          <Text style={styles.font5M15blue}> (필수)</Text>
        </View>
        <TextInputMask
          type="email"
          model={model}
          name="email"
          macthFlag={true}
          value={signUpInfo.id}
          maxLength={50}
          changeText={e => updateInput('id', e)}
          chkValImg={idChkFailMsg ? true : false}
          placeholder="이메일 형식으로 입력해주세요"
        />

        {idChkFailMsg ? <Text style={styles.errText}>{idChkFailMsg} </Text> : null}

        <View style={{ ...styles.row, marginTop: 20, marginBottom: 10 }}>
          <Text style={styles.font5M15}>비밀번호</Text>
          <Text style={styles.font5M15blue}> (필수)</Text>
        </View>
        <TextInputMask
          type="pwd"
          model={model}
          name="pwd"
          macthFlag={true}
          value={signUpInfo.password}
          maxLength={50}
          changeText={e => updateInput('password', e)}
          secureTextEntry={true}
          placeholder="숫자와 영문 대,소문자를 포함하여 6자리 이상"
        />

        <View style={{ ...styles.row, marginTop: 20, marginBottom: 10 }}>
          <Text style={styles.font5M15}>비밀번호 확인</Text>
          <Text style={styles.font5M15blue}> (필수)</Text>
        </View>
        <TextInputMask
          type="pwd"
          model={model}
          name="pwdConf"
          macthFlag={true}
          value={signUpInfo.pwdConf}
          maxLength={50}
          changeText={e => updateInput('pwdConf', e)}
          secureTextEntry={true}
          hideChkMsg={hideChkMsg}
          chkValImg={pwdChkFailMsg ? true : false}
          placeholder="한번 더 입력해주세요"
        />
        {pwdChkFailMsg != '' && <Text style={styles.errText}>{pwdChkFailMsg} </Text>}

        <View style={{ ...styles.row, marginTop: 20, marginBottom: 10 }}>
          <Text style={styles.font5M15}>이름</Text>
          <Text style={styles.font5M15blue}> (필수)</Text>
        </View>
        <TextInput
          style={{ ...styles.greyInput }}
          placeholder="이름을 입력해주세요"
          placeholderTextColor="rgb(174, 174, 174)"
          onChangeText={e => updateInput('name', e)}
        />

        <View style={{ ...styles.row, marginTop: 20, marginBottom: 10 }}>
          <Text style={styles.font5M15}>휴대폰번호</Text>
          <Text style={styles.font5M15blue}> (필수)</Text>
        </View>
        <View style={styles.row}>
          <TextInput
            style={{ ...styles.greyInput, flex: 1.5 }}
            placeholder="휴대폰번호를 입력해주세요"
            placeholderTextColor="rgb(174, 174, 174)"
            value={signUpInfo.phoneNumber}
            maxLength={13}
            onChangeText={e => updateInput('phoneNumber', e)}
          />
          <TouchableOpacity
            style={{ flex: 1, marginLeft: 10 }}
            disabled={signUpInfo.phoneNumber ? false : true}
            onPress={sendAuthCodeApi}>
            <View style={signUpInfo.phoneNumber ? styles.blueBtn : styles.greyBtn}>
              <Text style={styles.btnTxtWhite}>인증번호 발송</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.row, marginTop: 10 }}>
          <TextInput
            style={{ ...styles.greyInput, flex: 1.5 }}
            placeholder="인증번호를 입력해주세요"
            placeholderTextColor="rgb(174, 174, 174)"
            onChangeText={e => updateInput('authCode', e)}
          />
          <TouchableOpacity
            style={{ flex: 1, marginLeft: 10 }}
            disabled={signUpInfo.authCode ? false : true}
            onPress={confirmAuthCodeApi}>
            <View style={signUpInfo.authCode ? styles.blueBtn : styles.greyBtn}>
              <Text style={styles.btnTxtWhite}>인증번호 확인</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={joinEmployee} style={{ marginTop: 30, marginBottom: 40 }} disabled={!inputChk}>
          <View style={inputChk ? styles.blueBtn : styles.greyBtn}>
            <Text style={styles.btnTxtWhite}>회원가입</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default JoinForm;
