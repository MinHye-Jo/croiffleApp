import React, { useState } from 'react';

import { ScrollView, View, TextInput, Text, TouchableOpacity } from 'react-native';

import styles from 'styles/commonStyle';

import CustomCheckBox from 'components/button/CustomCheckBox';
import IconNextBlack from 'components/image/IconNextBlack';
import StoreSelectList from 'components/selection/StoreSelectList';
import DefaultModal from 'components/modal/DefaultModal';

import { supportSave } from 'services/support';

const CustomerSupport = props => {
  // 개인정보 데이터
  const [userInfo, setUserInfo] = useState({
    shopId: window.userInfo.shopId || 0,
    id: window.userInfo.id,
    name: window.userInfo.name,
    phoneNumber: window.userInfo.phoneNumber,
  });

  // 모달 데이터
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');

  // 고객지원 요청전송
  const sendAuthCodeApi = async () => {
    if (!userInfo.subject || !userInfo.message) {
      setModalOpen(true);
      setModalTitle('제출실패');
      setModalText('제목 또는 내용이 누락되었습니다.');
      return;
    }
    const { data } = await supportSave(userInfo);

    if (data && data.return_code == 200) {
      setModalOpen(true);
      setModalTitle('제출완료');
      setModalText('제출되었습니다.');
      setUserInfo({ ...userInfo, subject: '', message: '' });
    } else {
      setModalOpen(true);
      setModalTitle('제출실패');
      setModalText(data.return_message);
    }
  };

  return (
    <ScrollView style={styles.topContainer} showsVerticalScrollIndicator={false}>
      <DefaultModal
        modalOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        modalText={modalText}
      />

      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 제목 </Text>
        <TextInput
          style={{ ...styles.greyInput }}
          placeholder="제목을 입력해주세요"
          placeholderTextColor="rgb(174, 174, 174)"
          value={userInfo.subject}
          onChangeText={e => setUserInfo({ ...userInfo, subject: e })}
        />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 내용 </Text>
        <TextInput
          style={{ ...styles.greyInput, height: 120, paddingTop: 10 }}
          multiline={true}
          placeholder="내용을 입력해주세요"
          placeholderTextColor="rgb(174, 174, 174)"
          value={userInfo.message}
          onChangeText={e => setUserInfo({ ...userInfo, message: e })}
        />

        <Text style={{ ...styles.font5M15, marginTop: 40, marginBottom: 10 }}> 근무매장 </Text>
        <StoreSelectList
          value={userInfo.shopId}
          disabled={true}
          onChange={shopId => {
            setUserInfo({ ...userInfo, shopId });
          }}
        />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 이름 </Text>
        <TextInput style={{ ...styles.greyInput }} editable={false} value={userInfo.name} />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 아이디 </Text>
        <TextInput style={{ ...styles.greyInput }} editable={false} value={userInfo.id} />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 휴대폰번호 </Text>
        <TextInput style={{ ...styles.greyInput }} editable={false} value={userInfo.phoneNumber} />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 약관동의 </Text>
        <View style={styles.greyBox}>
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

        <TouchableOpacity onPress={sendAuthCodeApi}>
          <View style={{ ...styles.blueBtn, marginTop: 30, marginBottom: 40 }}>
            <Text style={styles.btnTxtWhite}>저장</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CustomerSupport;
