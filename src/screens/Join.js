import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from '@styles/commonStyle'
import CustomCheckBox from '@components/CustomCheckBox'
import IconNextBlack from '@components/IconNextBlack'


const Join = (props) => {

  return (
    <View style={styles.topContainer}>
      <View style={{
        height: '15%',
        marginTop: '20%',
        alignItems: 'center'
      }}>
        <Image source={require('../../assets/image/logo_b.png')} style={{ height: '100%', resizeMode: 'contain' }} />
      </View>

      <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 20 }}>
        <Text style={styles.loginFont}>고객님!</Text>
        <Text style={styles.loginFont}>환영합니다!</Text>
        <Text style={styles.loginFont2}>이용약관에 동의 해주세요</Text>
      </View>

      <View style={{ padding: 20, marginTop: 20 }}>
        <View style={{ ...styles.row, alignItems: 'center', paddingBottom: 10 }}>
          <CustomCheckBox />
          <Text style={styles.font5M15}> 약관 전체동의 </Text>
        </View>
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
      </View>

      <TouchableOpacity style={{ padding: 10 }} onPress={() => props.navigation.navigate('JoinFormPage')}>
        <View style={styles.blueBtn}>
          <Text style={styles.btnTxtWhite}>다음</Text>
        </View>
      </TouchableOpacity>
    </View >
  );
};

export default Join;