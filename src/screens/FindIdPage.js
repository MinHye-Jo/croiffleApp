import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import styles from 'styles/commonStyle';
import Logo from 'components/image/Logo';
import FindIdModal from 'components/modal/FindIdModal';
import DefaultModal from 'components/modal/DefaultModal';

import { findId } from 'services/auth';

const FindIdPage = props => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [inputChk, setInputChk] = useState(false);

  // 모달 데이터
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');

  const [findIdModalOpen, setFindIdModalOpen] = useState(false);
  const [findIdText, setFindIdText] = useState('');

  useEffect(() => {
    if (name && phoneNumber) {
      setInputChk(true);
    } else {
      setInputChk(false);
    }
  }, [name, phoneNumber]);

  const findIdApi = async () => {
    const { data } = await findId(name, phoneNumber);

    if (data && data.return_code == 200 && data.response) {
      setFindIdModalOpen(true);
      setFindIdText(data.response.id);
    } else {
      setModalOpen(true);
      setModalText(data.return_message);
    }
  };

  return (
    <ScrollView style={styles.topContainer}>
      <View style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20, paddingBottom: 30 }}>
        <FindIdModal
          modalOpen={findIdModalOpen}
          onClose={() => setFindIdModalOpen(false)}
          modalText={findIdText}
          navigation={props.navigation}
        />
        <DefaultModal modalOpen={modalOpen} onClose={() => setModalOpen(false)} modalText={modalText} />
        <Logo />
        <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 20 }}>
          <Text style={styles.loginFont}>아이디 찾기</Text>
          <Text style={styles.loginFont2}>회원가입 시 입력한 이름과</Text>
          <Text style={styles.loginFont2}>휴대폰 번호를 입력해주세요.</Text>
        </View>

        <View style={{ paddingTop: 30 }}>
          <Text style={{ ...styles.font5M15, marginBottom: 10 }}> 이름 </Text>
          <TextInput
            style={styles.greyInput}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={e => setName(e)}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ ...styles.font5M15, marginBottom: 10 }}> 휴대폰번호 </Text>
          <TextInput
            style={styles.greyInput}
            autoCapitalize="none"
            autoCorrect={false}
            value={phoneNumber}
            maxLength={13}
            onChangeText={e => setPhoneNumber(e.replace(/(\d{3})(-*)(\d{4})(-*)(\d{4})/, '$1-$3-$5'))}
          />
        </View>

        <TouchableOpacity style={{ marginTop: 30 }} disabled={!inputChk} onPress={() => findIdApi()}>
          <View style={inputChk ? styles.blueBtn : styles.greyBtn}>
            <Text style={styles.btnTxtWhite}>다음</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FindIdPage;
