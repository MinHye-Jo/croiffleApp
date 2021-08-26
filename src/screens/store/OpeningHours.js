import React, { useState, useEffect } from 'react';

import { ScrollView, View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import styles from 'styles/commonStyle';
import HoursSelectList from 'components/selection/HoursSelectList';
import MinuteSelectList from 'components/selection/MinuteSelectList';
import PickupMinuteSelectList from 'components/selection/PickupMinuteSelectList';
import DefaultModal from 'components/modal/DefaultModal';

import { shopEnv, shopEnvEdit } from 'services/shop';

const OpeningHours = ({ route }) => {
  // 영업시간 설정
  const [envData, setEnvData] = useState(null);

  // 모달 데이터
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');

  // 셀렉트 리스트 제어
  const [selectListCtrl, setSelectListCtrl] = useState({
    opHW: false,
    opMW: false,
    clHW: false,
    clMW: false,
    opHSat: false,
    opMSat: false,
    clHSat: false,
    clMSat: false,
    opHSun: false,
    opMSun: false,
    clHSun: false,
    clMSun: false,
    minPick: false,
  });

  useEffect(async () => {
    const { data } = await shopEnv(route.params.shopId);

    if (data.return_code == 200) {
      setEnvData(data.response);
    } else {
      setModalOpen(true);
      setModalText(data.return_message);
    }
  }, []);

  // 영업시간 수정 api
  const shopEnvEditApi = async () => {
    const open = ['openingHourSat', 'openingHourSun', 'openingHourWeekday'];
    const close = ['closingHourSat', 'closingHourSun', 'closingHourWeekday'];

    for (let i = 0; i < 3; i++) {
      if (Number(envData[open[i]]) > envData[close[i]]) {
        setModalOpen(true);
        setModalText('영업시간을 확인해 주시기 바랍니다.');
        return;
      }
    }

    const { data } = await shopEnvEdit(envData);
    if (data.return_code == 200) {
      setModalOpen(true);
      setModalTitle('영업시간 설정');
      setModalText('저장 되었습니다.');
    } else {
      setModalOpen(true);
      setModalTitle('영업시간 설정실패');
      setModalText(data.return_message);
    }
  };

  // 셀렉트 리스트 클릭건 제외 모두 닫기
  const ctrlDropList = key => {
    const list = { ...selectListCtrl };

    Object.keys(selectListCtrl).forEach(o => {
      if (key == 'all') {
        list[o] = false;
      } else {
        list[o] = key == o ? true : false;
      }
    });
    setSelectListCtrl(list);
  };

  // 리스트 z-Index 제어용 함수
  const getViewZIndex = keys => {
    const data = Object.entries(selectListCtrl).find(([k, v]) => v === true && keys.includes(k));
    return data ? 2000 : 1000;
  };

  const hoursComponent = (listKey, valueKey) => (
    <HoursSelectList
      value={envData ? envData[valueKey] : '00'}
      onChange={val => {
        setEnvData({ ...envData, [valueKey]: val });
      }}
      openFlag={selectListCtrl[listKey]}
      openCtrl={() => ctrlDropList(listKey)}
    />
  );

  const MinuteComponent = (listKey, valueKey) => (
    <MinuteSelectList
      value={envData ? envData[valueKey] : '00'}
      onChange={val => {
        setEnvData({ ...envData, [valueKey]: val });
      }}
      openFlag={selectListCtrl[listKey]}
      openCtrl={() => ctrlDropList(listKey)}
    />
  );

  return (
    <ScrollView style={styles.topContainer} showsVerticalScrollIndicator={false}>
      <DefaultModal
        modalOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        modalText={modalText}
      />
      <TouchableWithoutFeedback onPress={() => ctrlDropList('all')}>
        <View style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
          <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 월~금 </Text>

          <View style={{ ...styles.row, zIndex: getViewZIndex(['opHW', 'opMW']) }}>
            {hoursComponent('opHW', 'openingHourWeekday')}
            {MinuteComponent('opMW', 'openingMinuteWeekday')}
            <Text style={styles.font5M15}>부터</Text>
          </View>
          <View style={{ ...styles.row, marginTop: 10, zIndex: getViewZIndex(['clHW', 'clMW']) }}>
            {hoursComponent('clHW', 'closingHourWeekday')}
            {MinuteComponent('clMW', 'closingMinuteWeekday')}
            <Text style={styles.font5M15}>까지</Text>
          </View>

          <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 토요일 </Text>

          <View style={{ ...styles.row, zIndex: getViewZIndex(['opHSat', 'opMSat']) }}>
            {hoursComponent('opHSat', 'openingHourSat')}
            {MinuteComponent('opMSat', 'openingMinuteSat')}
            <Text style={styles.font5M15}>부터</Text>
          </View>
          <View style={{ ...styles.row, marginTop: 10, zIndex: getViewZIndex(['clHSat', 'clMSat']) }}>
            {hoursComponent('clHSat', 'closingHourSat')}
            {MinuteComponent('clMSat', 'closingMinuteSat')}
            <Text style={styles.font5M15}>까지</Text>
          </View>

          <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 일요일 </Text>

          <View style={{ ...styles.row, zIndex: getViewZIndex(['opHSun', 'opMSun']) }}>
            {hoursComponent('opHSun', 'openingHourSun')}
            {MinuteComponent('opMSun', 'openingMinuteSun')}
            <Text style={styles.font5M15}>부터</Text>
          </View>
          <View style={{ ...styles.row, marginTop: 10, zIndex: getViewZIndex(['clHSun', 'clMSun']) }}>
            {hoursComponent('clHSun', 'closingHourSun')}
            {MinuteComponent('clMSun', 'closingMinuteSun')}
            <Text style={styles.font5M15}>까지</Text>
          </View>

          <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 픽업 최소 주문시간 </Text>

          <View style={{ zIndex: getViewZIndex(['minPick']) }}>
            <PickupMinuteSelectList
              value={envData ? envData.minPickupTime : '10'}
              onChange={minPickupTime => {
                setEnvData({ ...envData, minPickupTime });
              }}
              openFlag={selectListCtrl.minPick}
              openCtrl={() => ctrlDropList('minPick')}
            />
          </View>

          <TouchableOpacity onPress={shopEnvEditApi}>
            <View style={{ ...styles.blueBtn, marginTop: 40, marginBottom: 60 }}>
              <Text style={styles.btnTxtWhite}>저장</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default OpeningHours;
