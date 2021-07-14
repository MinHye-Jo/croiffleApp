import React, { useState } from 'react';

import {
  ScrollView,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '@styles/commonStyle';

import CustomCheckBox from '@components/button/CustomCheckBox';
import IconNextBlack from '@components/image/IconNextBlack';
import StoreSelectList from '@components/selection/StoreSelectList';
import DefaultModal from '@components/modal/DefaultModal';
import DefaultActionModal from '@components/modal/DefaultActionModal';
import FindPostCode from '@components/modal/FindPostCode';

import { modifyUserInfo, sendAuthCode, confirmAuthCode, userWithdrawal } from '@service/auth';

const PersonalInfo = (props) => {
  // 개인정보 데이터
  const [userInfo, setUserInfo] = useState({
    shopId: window.userInfo.shopId || 0,
    id: window.userInfo.id,
    name: window.userInfo.name,
    phoneNumber: window.userInfo.phoneNumber,
    authCode: '',
    addressRoad: window.userInfo.addressRoad,
    addressDetail: window.userInfo.addressDetail,
    postalCode: window.userInfo.postalCode
  });

  const [phoneChk, setPhoneChk] = useState(true);

  // 모달 데이터
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [actModalOpen, setActModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalTextSec, setModalTextSec] = useState('');
  const [modalTextThi, setModalTextThi] = useState('');

  // 입력 데이터 셋
  const updateInput = (key, value) => {
    // 휴대폰번호 수정시 
    if (key == "phoneNumber") setPhoneChk(false);

    if (key == "address") {
      setUserInfo({
        ...userInfo,
        addressRoad: value.address,
        postalCode: value.zonecode
      })

      // 우편번호 검색 모달 닫기
      setPostModalOpen(false);
    } else {
      setUserInfo({
        ...userInfo,
        [key]: value
      })
    }
  }

  // 인증번호 발송
  const sendAuthCodeApi = async () => {
    const re = await sendAuthCode(userInfo.phoneNumber);

    if (re.data && re.data.return_code == 200) {
      setModalData("인증번호 발송", "입력하신 번호로 인증번호가 발송되었습니다.", "인증번호가 오지 않을 경우", "입력하신 번호가 정확한지 확인하여 주세요.");
    } else {
      setModalData("인증번호 발송 실패", re.data.return_message);
    }
  }

  // 인증번호 확인
  const confirmAuthCodeApi = async () => {
    const re = await confirmAuthCode(userInfo.phoneNumber, userInfo.authCode);

    if (re.data && re.data.return_code == 200) {
      setPhoneChk(true);
      setModalData("휴대폰번호 인증 완료", "휴대폰번호 인증이 완료되었습니다.");
    } else {
      setModalData("휴대폰번호 인증 실패", re.data.return_message);
    }
  }

  // 개인정보 수정
  const editUserInfo = async () => {
    // 이름 입력 확인
    if (!userInfo.name) {
      setModalData("이름 입력 필수", "이름을 입력해주세요.");
      return;
    }

    // 휴대폰 인증 
    if (!phoneChk) {
      setModalData("휴대폰번호 인증 필수", "휴대폰번호 인증을 완료해주세요.");
      return;
    }

    // 회원가입용 데이터만 사용
    const params = { ...userInfo };
    delete params.authCode;

    // 회원가입 API 호출
    const { data } = await modifyUserInfo(params);
    console.log(data)
    if (data && data.return_code == 200) {
      for (const key in userInfo) {
        window.userInfo[key] = userInfo[key];
      }
      setModalData("저장완료", "저장되었습니다.");
    } else {
      setModalData("저장실패", re.data.return_message);
    }
  }

  // 회원탈퇴
  const withdrawalApi = async () => {
    setActModalOpen(false);

    const { data } = await userWithdrawal();
    if (data && data.return_code == 200) {
      console.log("???????????")
      setModalData("회원탈퇴 성공", "회원탈퇴 되었습니다.");
    } else {
      setModalData("회원탈퇴 실패", re.data.return_message);
    }
  }

  // 모달 데이터처리 공통함수
  const setModalData = (title, txt1, txt2, txt3) => {
    setModalOpen(true);
    setModalTitle(title || "");
    setModalText(txt1 || "");
    setModalTextSec(txt2 || "");
    setModalTextThi(txt3 || "");
  }

  return (
    <ScrollView style={styles.topContainer}>
      <DefaultModal modalOpen={modalOpen} onClose={() => setModalOpen(false)}
        title={modalTitle} modalText={modalText} modalTextSec={modalTextSec} modalTextThi={modalTextThi} />

      <DefaultActionModal modalOpen={actModalOpen}
        onClose={() => setActModalOpen(false)}
        onAction={() => withdrawalApi()}
        title="회원탈퇴" modalText="정말 회원탈퇴 하시겠습니까?" />

      <FindPostCode modalOpen={postModalOpen}
        onClose={() => setPostModalOpen(false)}
        onSelect={(data) => updateInput('address', data)} />

      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{ ...styles.font5M15, marginTop: 40, marginBottom: 10 }}> 근무매장 </Text>
        <StoreSelectList value={userInfo.shopId} disabled={true}
          onChange={(shopId) => { setUserInfo({ ...userInfo, shopId }) }} />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 이름 </Text>
        <TextInput style={{ ...styles.greyInput }} value={userInfo.name} onChangeText={e => updateInput('name', e)} />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 아이디 </Text>
        <TextInput style={{ ...styles.greyInput }} editable={false} value={userInfo.id} />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 휴대폰번호 변경</Text>
        <View style={styles.row}>
          <TextInput style={{ ...styles.greyInput, flex: 1.5 }}
            placeholder="휴대폰번호를 입력해주세요"
            placeholderTextColor='rgb(174, 174, 174)'
            value={userInfo.phoneNumber}
            onChangeText={e => updateInput('phoneNumber', e)} />
          <TouchableOpacity style={{ flex: 1, marginLeft: 10 }}
            disabled={userInfo.phoneNumber ? false : true}
            onPress={sendAuthCodeApi}>
            <View style={userInfo.phoneNumber ? styles.blueBtn : styles.greyBtn}>
              <Text style={styles.btnTxtWhite}>인증번호 발송</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.row, marginTop: 10 }}>
          <TextInput style={{ ...styles.greyInput, flex: 1.5 }}
            placeholder="인증번호를 입력해주세요"
            placeholderTextColor='rgb(174, 174, 174)'
            onChangeText={e => updateInput('authCode', e)} />
          <TouchableOpacity style={{ flex: 1, marginLeft: 10 }}
            disabled={userInfo.authCode ? false : true}
            onPress={confirmAuthCodeApi}>
            <View style={userInfo.authCode ? styles.blueBtn : styles.greyBtn}>
              <Text style={styles.btnTxtWhite}>인증번호 확인</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={{ ...styles.font5M15, marginTop: 30 }}> 주소 변경</Text>
        <View style={styles.row}>
          <TextInput style={{ ...styles.greyInput, flex: 1.5 }}
            value={userInfo.postalCode}
            onChangeText={e => updateInput('postalCode', e)} />
          <TouchableOpacity style={{ ...styles.blueBtn, flex: 1, margin: 10 }} onPress={() => setPostModalOpen(true)}>
            <Text style={styles.btnTxtWhite}>우편번호 검색</Text>
          </TouchableOpacity>
        </View>
        <TextInput style={{ ...styles.greyInput, marginBottom: 10 }}
          value={userInfo.addressRoad}
          onChangeText={e => updateInput('addressRoad', e)} />
        <TextInput style={{ ...styles.greyInput }}
          value={userInfo.addressDetail}
          onChangeText={e => updateInput('addressDetail', e)} />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 약관동의 </Text>
        <View style={styles.greyBox}>
          <View style={{ ...styles.row, alignItems: 'center', paddingTop: 10 }}>
            <CustomCheckBox checked={true} disabled={true} />
            <View style={styles.rowFlex2Left}>
              <Text style={styles.font5M15}> 서비스 이용약관 (필수) </Text>
            </View>
            <View style={styles.rowFlex1Right}>
              <TouchableOpacity onPress={() => props.navigation.navigate('TermsOfService', { disabled: true })}>
                <IconNextBlack />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ ...styles.row, alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>
            <CustomCheckBox checked={true} disabled={true} />
            <View style={styles.rowFlex2Left}>
              <Text style={styles.font5M15}> 개인정보 처리방침 (필수) </Text>
            </View>
            <View style={styles.rowFlex1Right}>
              <TouchableOpacity onPress={() => props.navigation.navigate('PrivacyPolicyPage', { disabled: true })}>
                <IconNextBlack />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={editUserInfo}>
          <View style={{ ...styles.blueBtn, marginTop: 30 }}>
            <Text style={styles.btnTxtWhite}>저장</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActModalOpen(true)}>
          <View style={{ ...styles.greyBtn, marginTop: 15, marginBottom: 40 }}>
            <Text style={styles.btnTxtWhite}>회원탈퇴</Text>
          </View>
        </TouchableOpacity>
      </View >
    </ScrollView>
  );
};

export default PersonalInfo;