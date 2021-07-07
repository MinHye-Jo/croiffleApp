import React from 'react';

import { ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from '@styles/commonStyle';
import TextInputMask from '@components/TextInputMask';
import { modifyPassword } from '@service/auth';


const PasswordEdit = (props) => {
  return (
    <ScrollView style={styles.topContainer}>
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{ ...styles.font5M15, marginTop: 40, marginBottom: 10 }}> 현재 비밀번호 </Text>
        <TextInput style={styles.greyInput} />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 신규 비밀번호 </Text>
        <TextInputMask />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 비밀번호 확인 </Text>
        <TextInputMask />

        <TouchableOpacity onPress={() => props.navigation.navigate('JoinConfirmPage')}>
          <View style={{ ...styles.blueBtn, marginTop: 40 }}>
            <Text style={styles.btnTxtWhite}>저장</Text>
          </View>
        </TouchableOpacity>
      </View >
    </ScrollView>
  );
};

export default PasswordEdit;