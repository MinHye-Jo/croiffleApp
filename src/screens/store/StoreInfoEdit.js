import React from 'react';

import {
  ScrollView,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from '@styles/commonStyle';

const StoreInfoEdit = (props) => {

  return (
    <ScrollView style={styles.topContainer}>
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 매장명 </Text>
        <TextInput style={{ ...styles.greyInput }} />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 매장 사진등록 </Text>
        <View style={styles.row}>
          <TextInput style={{ ...styles.greyInput, flex: 1.5 }} placeholder="파일을 첨부해주세요" placeholderTextColor="rgb(174, 174, 174)" />
          <View style={{ ...styles.blueBtn, flex: 1, marginLeft: 10 }}>
            <Text style={styles.btnTxtWhite}>사진 등록</Text>
          </View>
        </View>

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 매장주소 </Text>
        <View style={styles.row}>
          <TextInput style={{ ...styles.greyInput, flex: 1.5 }} editable={false} />
          <View style={{ ...styles.blueBtn, flex: 1, marginLeft: 10 }}>
            <Text style={styles.btnTxtWhite}>우편번호 검색</Text>
          </View>
        </View>
        <TextInput style={{ ...styles.greyInput, marginTop: 10 }} />
        <TextInput style={{ ...styles.greyInput, marginTop: 10 }} />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 매장 전화번호 </Text>
        <TextInput style={{ ...styles.greyInput }} />

        <TouchableOpacity onPress={() => props.navigation.navigate('JoinConfirmPage')}>
          <View style={{ ...styles.blueBtn, marginTop: 30, marginBottom: 40 }}>
            <Text style={styles.btnTxtWhite}>저장</Text>
          </View>
        </TouchableOpacity>
      </View >
    </ScrollView>
  );
};

export default StoreInfoEdit;