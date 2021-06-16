import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import StoreManageSetButton from '@components/button/StoreManageSetButton'
import OnOffSwitchGrey from '@components/switch/OnOffSwitchGrey'
import styles from '@styles/commonStyle'


const StoreManagement = (props) => {
  return (
    <View style={{ backgroundColor: 'rgb(242, 243, 245)', padding: 20 }}>
      <View style={styles.storeWhiteBox}>
        <View style={styles.rowFlex2Left}>
          <Text style={styles.font5M15}> 매장 </Text>
        </View>
        <View style={{ ...styles.greyBox, marginRight: 10, width: 80, alignItems: 'center', height: 30, justifyContent: 'center' }}>
          <Text style={styles.font5M15}> 광화문점 </Text>
        </View>
      </View>

      <View style={{ ...styles.storeWhiteBox, marginTop: 10 }}>
        <View style={styles.rowFlex2Left}>
          <Text style={styles.font5M15}> 영업 일시중지 </Text>
        </View>
        <OnOffSwitchGrey />
      </View>

      <View style={{ ...styles.storeWhiteBox, marginTop: 10 }}>
        <View style={styles.rowFlex2Left}>
          <Text style={styles.font5M15}> 매장정보 수정 </Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('StoreInfoEdit')}>
          <StoreManageSetButton />
        </TouchableOpacity>
      </View>

      <View style={{ ...styles.storeWhiteBox, marginTop: 10 }}>
        <View style={styles.rowFlex2Left}>
          <Text style={styles.font5M15}> 영업시간 설정 </Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('OpeningHours')}>
          <StoreManageSetButton />
        </TouchableOpacity>
      </View>

      <View style={{ ...styles.storeWhiteBox, marginTop: 10 }}>
        <View style={styles.rowFlex2Left}>
          <Text style={styles.font5M15}> 휴무일 설정 </Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('HolidaySetting')}>
          <StoreManageSetButton />
        </TouchableOpacity>
      </View>

      <View style={{ ...styles.storeWhiteBox, marginTop: 10 }}>
        <View style={styles.rowFlex2Left}>
          <Text style={styles.font5M15}> 메뉴 관리 </Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('MenuManagement')}>
          <StoreManageSetButton />
        </TouchableOpacity>
      </View>

      <View style={{ ...styles.storeWhiteBox, marginTop: 10 }}>
        <View style={styles.rowFlex2Left}>
          <Text style={styles.font5M15}> 알림설정 </Text>
        </View>
        <OnOffSwitchGrey />
      </View>

      <View style={{ ...styles.storeWhiteBox, marginTop: 10 }}>
        <View style={styles.rowFlex2Left}>
          <Text style={styles.font5M15}> 버전정보 </Text>
        </View>
        <View style={{ ...styles.greyBox, marginRight: 10, width: 80, alignItems: 'center', height: 30, justifyContent: 'center' }}>
          <Text style={styles.font5M15}> 업데이트 </Text>
        </View>
      </View>

      <View style={{ ...styles.storeWhiteBox, marginTop: 10 }}>
        <View style={styles.row}>
          <Text style={styles.font5M15}> 도움말 </Text>
          <Text style={styles.font5M15}> 다운로드 </Text>
        </View>
      </View>
    </View >
  );
};

export default StoreManagement;