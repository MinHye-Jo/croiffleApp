import React from 'react';

import {
  ScrollView,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from '@styles/commonStyle';
import WeekSelectList from '@components/selection/WeekSelectList';
import DaySelectList from '@components/selection/DaySelectList';
import AddButton from '@components/button/AddButton';
import OnOffSwitchWhite from '@components/switch/OnOffSwitchWhite';

const HolidaySetting = (props) => {

  return (
    <ScrollView style={styles.topContainer}>
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <View style={{ ...styles.row, flex: 1, marginTop: 10, marginTop: 30, }}>
          <Text style={{ ...styles.font5M15, marginBottom: 5, flex: 2 }}> 정기휴무 </Text>
          <AddButton />
        </View>

        <View style={{ ...styles.row, flex: 1, marginTop: 10 }}>
          <WeekSelectList value={"1"} />
          <DaySelectList value={"1"} />
          <View style={{ ...styles.greyBox, alignItems: 'center', justifyContent: 'center', width: 80, height: 50 }}>
            <Text style={styles.redText}>삭제</Text>
          </View>
        </View>

        <View style={{ ...styles.row, flex: 1, marginTop: 10, marginTop: 30 }}>
          <Text style={{ ...styles.font5M15, marginBottom: 5, flex: 2 }}> 임시 휴무 </Text>
          <AddButton />
        </View>

        <View style={{ ...styles.row, flex: 1, marginTop: 10 }}>
          {/* 추후 데이터 피커로 변경 되어야함 */}
          <WeekSelectList />
          <DaySelectList />
          <View style={{ ...styles.greyBox, alignItems: 'center', justifyContent: 'center', width: 80, height: 50 }}>
            <Text style={styles.redText}>삭제</Text>
          </View>
        </View>

        <View style={{ ...styles.storeGreyBox, marginTop: 30 }}>
          <View style={styles.rowFlex2Left}>
            <Text style={styles.font5M15}> 공휴일 </Text>
          </View>
          <OnOffSwitchWhite />
        </View>

        <TouchableOpacity onPress={() => props.navigation.navigate('JoinConfirmPage')}>
          <View style={{ ...styles.blueBtn, marginTop: 30, marginBottom: 40 }}>
            <Text style={styles.btnTxtWhite}>저장</Text>
          </View>
        </TouchableOpacity>
      </View >
    </ScrollView >
  );
};

export default HolidaySetting;