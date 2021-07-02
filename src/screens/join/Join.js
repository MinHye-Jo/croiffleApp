import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '@styles/commonStyle';
import CustomCheckBox from '@components/CustomCheckBox';
import IconNextBlack from '@components/IconNextBlack';
import Logo from '@components/image/Logo';
import DefaultModal from '@components/modal/DefaultModal';

const Join = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [agree, setAgree] = useState({
    all: false,
    terms: false,
    service: false
  });

  const agresChange = (type, checked) => {
    // 전체동의
    if (type === 'all') {
      setAgree({
        all: checked,
        terms: checked,
        service: checked
      });
    } else {
      // 약관 또는 서비스
      const agreeInfo = {
        terms: agree.terms,
        service: agree.service,
        [type]: checked
      };

      const agreeAll = agreeInfo.terms && agreeInfo.service;

      setAgree({
        all: agreeAll,
        ...agreeInfo
      });
    }
  };

  // 동의 콜백 이벤트
  const onAgree = (type) => {
    agresChange(type, true);
  }

  // 회원가입 진행
  const nextBtnAction = () => {
    if (!agree.all) setModalOpen(true);
    else props.navigation.navigate('JoinFormPage')
  };

  return (
    <View style={styles.topContainer}>
      <DefaultModal modalOpen={modalOpen} onClose={() => setModalOpen(false)} modalText="이용약관에 동의를 해주세요" />

      <Logo />
      <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 20 }}>
        <Text style={styles.loginFont}>고객님!</Text>
        <Text style={styles.loginFont}>환영합니다!</Text>
        <Text style={styles.loginFont2}>이용약관에 동의 해주세요</Text>
      </View>

      <View style={{ padding: 20, marginTop: 20 }}>
        <View style={{ ...styles.row, alignItems: 'center', paddingBottom: 10 }}>
          <CustomCheckBox checked={agree.all} onChange={(checked) => agresChange('all', checked)} />
          <Text style={styles.font5M15}> 약관 전체동의 </Text>
        </View>
        <View style={styles.greyBox}>
          <View style={{ ...styles.row, alignItems: 'center', paddingTop: 10 }}>
            <CustomCheckBox checked={agree.terms} onChange={(checked) => agresChange('terms', checked)} />
            <View style={styles.rowFlex2Left}>
              <Text style={styles.font5M15}> 서비스 이용약관 (필수) </Text>
            </View>
            <View style={styles.rowFlex1Right}>
              <TouchableOpacity navigation={props.navigation}
                onPress={() => props.navigation.navigate('TermsOfService', { onAgree })}>
                <IconNextBlack />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ ...styles.row, alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>
            <CustomCheckBox checked={agree.service} onChange={(checked) => agresChange('service', checked)} />
            <View style={styles.rowFlex2Left}>
              <Text style={styles.font5M15}> 개인정보 처리방침 (필수) </Text>
            </View>
            <View style={styles.rowFlex1Right}>
              <TouchableOpacity navigation={props.navigation}
                onPress={() => props.navigation.navigate('PrivacyPolicyPage', { onAgree })}>
                <IconNextBlack />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={{ padding: 20, paddingTop: 10 }} onPress={() => nextBtnAction()}>
        <View style={styles.blueBtn}>
          <Text style={styles.btnTxtWhite}>다음</Text>
        </View>
      </TouchableOpacity>
    </View >
  );
};

export default Join;