import React from 'react';

import {
  ScrollView,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from '@styles/commonStyle';
import HoursSeelctList from '@components/selection/HoursSeelctList';
import MinuteSeelctList from '@components/selection/MinuteSeelctList';

const OpeningHours = (props) => {

  return (
    <ScrollView style={styles.topContainer}>
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 월~금 </Text>

        <View style={{ ...styles.row, flex: 1 }}>
          <HoursSeelctList />
          <MinuteSeelctList />
          <Text style={styles.font5M15}>부터</Text>
        </View>
        <View style={{ ...styles.row, flex: 1, marginTop: 10 }}>
          <HoursSeelctList />
          <MinuteSeelctList />
          <Text style={styles.font5M15}>까지</Text>
        </View>

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 토요일 </Text>

        <View style={{ ...styles.row, flex: 1 }}>
          <HoursSeelctList />
          <MinuteSeelctList />
          <Text style={styles.font5M15}>부터</Text>
        </View>
        <View style={{ ...styles.row, flex: 1, marginTop: 10 }}>
          <HoursSeelctList />
          <MinuteSeelctList />
          <Text style={styles.font5M15}>까지</Text>
        </View>

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 일요일 </Text>

        <View style={{ ...styles.row, flex: 1 }}>
          <HoursSeelctList />
          <MinuteSeelctList />
          <Text style={styles.font5M15}>부터</Text>
        </View>
        <View style={{ ...styles.row, flex: 1, marginTop: 10 }}>
          <HoursSeelctList />
          <MinuteSeelctList />
          <Text style={styles.font5M15}>까지</Text>
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

export default OpeningHours;