import React from 'react';

import {
  ScrollView,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '@styles/commonStyle';

import CustomCheckBox from '@components/CustomCheckBox';
import IconNextBlack from '@components/IconNextBlack';
import StoreSeelctList from '@components/StoreSeelctList';


const PersonalInfo = (props) => {

  return (
    <ScrollView style={styles.topContainer}>
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{ ...styles.font5M15, marginTop: 40, marginBottom: 10 }}> 근무매장 </Text>
        <StoreSeelctList />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 이름 </Text>
        <TextInput style={{ ...styles.greyInput }} />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 아이디 </Text>
        <TextInput style={{ ...styles.greyInput }} />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 휴대폰번호 변경</Text>
        <View style={styles.row}>
          <TextInput style={{ ...styles.greyInput, flex: 1.5 }} />
          <View style={{ ...styles.blueBtn, flex: 1, marginLeft: 10 }}>
            <Text style={styles.btnTxtWhite}>인증번호 발송</Text>
          </View>
        </View>
        <View style={styles.row}>
          <TextInput style={{ ...styles.greyInput, flex: 1.5, marginTop: 10 }} />
          <View style={{ ...styles.blueBtn, flex: 1, marginLeft: 10, marginTop: 10 }}>
            <Text style={styles.btnTxtWhite}>인증번호 확인</Text>
          </View>
        </View>

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 주소 변경</Text>
        <View style={styles.row}>
          <TextInput style={{ ...styles.greyInput, flex: 1.5 }} />
          <View style={{ ...styles.blueBtn, flex: 1, margin: 10 }}>
            <Text style={styles.btnTxtWhite}>우편번호 검색</Text>
          </View>
        </View>
        <TextInput style={{ ...styles.greyInput, marginBottom: 10 }} />
        <TextInput style={{ ...styles.greyInput }} />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 약관동의 </Text>
        <View style={styles.greyBox}>
          <View style={{ ...styles.row, alignItems: 'center', paddingTop: 10 }}>
            <CustomCheckBox />
            <View style={styles.rowFlex2Left}>
              <Text style={styles.font5M15}> 서비스 이용약관 (필수) </Text>
            </View>
            <View style={styles.rowFlex1Right}>
              <TouchableOpacity onPress={() => props.navigation.navigate('TermsOfService')}>
                <IconNextBlack />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ ...styles.row, alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>
            <CustomCheckBox />
            <View style={styles.rowFlex2Left}>
              <Text style={styles.font5M15}> 개인정보 처리방침 (필수) </Text>
            </View>
            <View style={styles.rowFlex1Right}>
              <TouchableOpacity onPress={() => props.navigation.navigate('PrivacyPolicyPage')}>
                <IconNextBlack />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => props.navigation.navigate('JoinConfirmPage')}>
          <View style={{ ...styles.blueBtn, marginTop: 30 }}>
            <Text style={styles.btnTxtWhite}>저장</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('JoinConfirmPage')}>
          <View style={{ ...styles.greyBtn, marginTop: 15, marginBottom: 40 }}>
            <Text style={styles.btnTxtWhite}>회원탈퇴</Text>
          </View>
        </TouchableOpacity>
      </View >
    </ScrollView>
  );
};

export default PersonalInfo;