import React from 'react';

import {
  ScrollView,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '@styles/commonStyle'
import DropDownPicker from 'react-native-dropdown-picker';

import TextInputMask from '@components/TextInputMask'

const items = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' }
];

const JoinForm = (props) => {

  return (
    <View style={{ ...styles.topContainer }}>
      <ScrollView>
        <Text style={{ ...styles.font5M15, marginTop: 40, marginLeft: 20, marginBottom: 10 }}> 근무매장 </Text>
        <View>
          <DropDownPicker
            style={styles.dropDown}
            // open={open}
            // value={value}
            items={items}
          // setValue={setValue}
          // setItems={setItems}
          // setOpen={setOpen}
          />
        </View>
        <Text style={{ ...styles.font5M15, margin: 20, marginBottom: 10 }}> 아이디 </Text>
        <TextInputMask />

        <Text style={{ ...styles.font5M15, margin: 20, marginBottom: 10 }}> 비밀번호 </Text>
        <TextInputMask />

        <Text style={{ ...styles.font5M15, margin: 20, marginBottom: 10 }}> 비밀번호 확인 </Text>
        <TextInputMask />

        <Text style={{ ...styles.font5M15, margin: 20, marginBottom: 10 }}> 이름 </Text>
        <TextInput style={{ ...styles.greyInput, marginLeft: 20, marginRight: 20 }} />

        <Text style={{ ...styles.font5M15, margin: 20, marginBottom: 10 }}> 휴대폰번호 </Text>
        <View style={styles.row}>
          <TextInput style={{ ...styles.greyInput, marginLeft: 20, flex: 1.5 }} />
          <View style={{ ...styles.blueBtn, flex: 1, margin: 10 }}>
            <Text style={styles.blueBtnTxt}>인증번호 발송</Text>
          </View>
        </View>
        <View style={styles.row}>
          <TextInput style={{ ...styles.greyInput, marginLeft: 20, flex: 1.5 }} />
          <View style={{ ...styles.blueBtn, flex: 1, margin: 10 }}>
            <Text style={styles.blueBtnTxt}>인증번호 확인</Text>
          </View>
        </View>

        <TouchableOpacity style={{ padding: 10 }} onPress={() => props.navigation.navigate('JoinConfirmPage')}>
          <View style={{ ...styles.blueBtn, margin: 10 }}>
            <Text style={styles.blueBtnTxt}>회원가입</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View >
  );
};

export default JoinForm;