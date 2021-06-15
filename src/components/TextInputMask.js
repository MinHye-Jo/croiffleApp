
import React, { useState } from 'react';
import { Image, TextInput, Text, View, StyleSheet } from 'react-native';
import styles from '@styles/commonStyle';

// 타입별 정규 표현식
const maskTypeList = {
  // 숫자만
  number: /[^0-9]+/,
  // 이메일
  email: /(?=^((?!([0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3})$)))/i,
  // 한글 및 영문
  name: /[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z\s]+/,
  // 핸드폰번호
  phone: /(?=^(?!(^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$)))/,
  // 주민번호 앞자리
  fRegiNum: /(?=^(?!([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))))/,
  // 주민번호 뒷자리
  sRegiNum: /(?=^(?![1-4][0-9]{6}$))/,
  // 비밀번호
  pwd: /(?=^(?!(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$))/
};

// 메시지 노출 필요 할 경우 셋팅
const failMsg = {
  email: '이메일 형식에 맞지 않습니다.',
  phone: '휴대폰번호를 확인하여 주시기 바랍니다.',
  fRegiNum: '주민번호 형식에 맞지 않습니다.',
  sRegiNum: '주민번호 형식에 맞지 않습니다.',
  pwd: '영문, 숫자 포함 8~20자로 입력해 주시기 바랍니다.'
}

// input 타입별 Mask 처리함수
const TextInputMask = () => {

  // const [isError, setIsError] = useState(false);

  // const onChange = (value: string) => {
  // 	// 유효성 처리
  // 	if (props.model && props.name) {
  // 		props.model[props.name] = true;
  // 	}

  // 	// 자동 하이픈 입력
  // 	if (props.type === 'phone') {
  // 		value = value.replace(/(\d{3})(-*)(\d{4})(-*)(\d{4})/, '$1-$3-$5');
  // 	}

  // 	if ((new RegExp(maskTypeList[props.type]).test(value))) {
  // 		if (props.model && props.name) {
  // 			props.model[props.name] = false;
  // 		}

  // 		// macthFlag true 일경우 입력 데이터 확인 후 failMsg 출력 / false 일경우 입력제한
  // 		if (props.macthFlag) setIsError(true);
  // 		else return false;
  // 	} else setIsError(false);


  // 	props.changeText(value);
  // }

  return (
    // <View>
    //   <TextInput {...props} onChangeText={onChange} />
    //   {isError && failMsg[props.type] && <Text style={{ alignSelf: 'flex-start', color: 'red', fontSize: 13, fontFamily: 'NanumSquareRoundB' }}>{failMsg[props.type]}</Text>}
    // </View >
    <View style={styles.inputMaskRow}>
      <View style={styles.rowFlex2Left}>
        <TextInput style={styles.inputMask} />
      </View>
      <Image style={{ ...styles.image25, marginRight: 10 }} source={require('../../assets/image/icon/icon_check_g.png')} />
    </View>
  );
};

export default TextInputMask;