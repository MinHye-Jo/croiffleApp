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
import StoreSelectList from '@components/selection/StoreSelectList';


const CustomerSupport = (props) => {

  return (
    <ScrollView style={styles.topContainer}>
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 제목 </Text>
        <TextInput style={{ ...styles.greyInput }} placeholder="제목을 입력해주세요" />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 내용 </Text>
        <TextInput style={{ ...styles.greyInput, height: 120, paddingTop: 10 }} placeholder="내용을 입력해주세요" multiline={true} />

        <Text style={{ ...styles.font5M15, marginTop: 40, marginBottom: 10 }}> 근무매장 </Text>
        <StoreSelectList />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 이름 </Text>
        <TextInput style={{ ...styles.greyInput }} />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 아이디 </Text>
        <TextInput style={{ ...styles.greyInput }} />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 휴대폰번호 </Text>
        <TextInput style={{ ...styles.greyInput }} />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 약관동의 </Text>
        <View style={styles.greyBox}>
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
          <View style={{ ...styles.blueBtn, marginTop: 30, marginBottom: 40 }}>
            <Text style={styles.btnTxtWhite}>저장</Text>
          </View>
        </TouchableOpacity>
      </View >
    </ScrollView>
  );
};

export default CustomerSupport;