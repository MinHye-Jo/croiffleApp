import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import SaleSoldoutSwitch from '@components/switch/SaleSoldoutSwitch'
import styles from '@styles/commonStyle'


const MenuManagement = (props) => {
  return (
    <ScrollView style={styles.topContainer}>
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>

        <Text style={{ ...styles.font5M15, marginTop: 40 }}> 크로플 </Text>
        <View style={{ ...styles.storeGreyBox, marginTop: 10 }}>
          <View style={styles.rowFlex2Left}>
            <Text style={styles.font5M15}> 플레인 크로플 </Text>
          </View>
          <SaleSoldoutSwitch />
        </View>
        <View style={{ ...styles.storeGreyBox, marginTop: 10 }}>
          <View style={styles.rowFlex2Left}>
            <Text style={styles.font5M15}> 치즈 크로플 </Text>
          </View>
          <SaleSoldoutSwitch />
        </View>
        <View style={{ ...styles.storeGreyBox, marginTop: 10 }}>
          <View style={styles.rowFlex2Left}>
            <Text style={styles.font5M15}> 바질 크로플 </Text>
          </View>
          <SaleSoldoutSwitch />
        </View>

        <Text style={{ ...styles.font5M15, marginTop: 30 }}> 크로플 옵션</Text>
        <View style={{ ...styles.storeGreyBox, marginTop: 10 }}>
          <View style={styles.rowFlex2Left}>
            <Text style={styles.font5M15}> 크림치즈 레몬 </Text>
          </View>
          <SaleSoldoutSwitch />
        </View>
        <View style={{ ...styles.storeGreyBox, marginTop: 10 }}>
          <View style={styles.rowFlex2Left}>
            <Text style={styles.font5M15}> 크림치즈 자몽 </Text>
          </View>
          <SaleSoldoutSwitch />
        </View>
        <View style={{ ...styles.storeGreyBox, marginTop: 10 }}>
          <View style={styles.rowFlex2Left}>
            <Text style={styles.font5M15}> 크림치즈 블루베리 </Text>
          </View>
          <SaleSoldoutSwitch />
        </View>

        <Text style={{ ...styles.font5M15, marginTop: 30 }}> 세트메뉴 </Text>
        <View style={{ ...styles.storeGreyBox, marginTop: 10 }}>
          <View style={styles.rowFlex2Left}>
            <Text style={styles.font5M15}> 내맘대로 크로플 (5개) </Text>
          </View>
          <SaleSoldoutSwitch />
        </View>

        <Text style={{ ...styles.font5M15, marginTop: 30 }}> 음료 </Text>
        <View style={{ ...styles.storeGreyBox, marginTop: 10 }}>
          <View style={styles.rowFlex2Left}>
            <Text style={styles.font5M15}> ICE 아메리카노 </Text>
          </View>
          <SaleSoldoutSwitch />
        </View>


      </View >
    </ScrollView >
  );
};

export default MenuManagement;