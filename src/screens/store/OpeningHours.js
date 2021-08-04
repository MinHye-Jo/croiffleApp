import React, { useState, useEffect } from 'react';

import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

import styles from 'styles/commonStyle';
import HoursSelectList from 'components/selection/HoursSelectList';
import MinuteSelectList from 'components/selection/MinuteSelectList';
import DefaultModal from 'components/modal/DefaultModal';

import { shopEnv, shopEnvEdit } from 'services/shop';

const OpeningHours = ({ route }) => {
  // 영업시간 설정
  const [envData, setEnvData] = useState(null);

  // 모달 데이터
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');

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

  return (
    <ScrollView style={styles.topContainer} showsVerticalScrollIndicator={false}>
      <DefaultModal
        modalOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        modalText={modalText}
      />

      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 월~금 </Text>

        <View style={{ ...styles.row, zIndex: 2000 }}>
          <HoursSelectList
            value={envData ? envData.openingHourWeekday : '00'}
            onChange={openingHourWeekday => {
              setEnvData({ ...envData, openingHourWeekday });
            }}
          />
          <MinuteSelectList
            value={envData ? envData.openingMinuteWeekday : '00'}
            onChange={openingMinuteWeekday => {
              setEnvData({ ...envData, openingMinuteWeekday });
            }}
          />
          <Text style={styles.font5M15}>부터</Text>
        </View>
        <View style={{ ...styles.row, marginTop: 10, zIndex: 1900 }}>
          <HoursSelectList
            value={envData ? envData.closingHourWeekday : '00'}
            onChange={closingHourWeekday => {
              setEnvData({ ...envData, closingHourWeekday });
            }}
          />
          <MinuteSelectList
            value={envData ? envData.closingMinuteWeekday : '00'}
            onChange={closingMinuteWeekday => {
              setEnvData({ ...envData, closingMinuteWeekday });
            }}
          />
          <Text style={styles.font5M15}>까지</Text>
        </View>

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 토요일 </Text>

        <View style={{ ...styles.row, zIndex: 1800 }}>
          <HoursSelectList
            value={envData ? envData.openingHourSat : '00'}
            onChange={openingHourSat => {
              setEnvData({ ...envData, openingHourSat });
            }}
          />
          <MinuteSelectList
            value={envData ? envData.openingMinuteSat : '00'}
            onChange={openingMinuteSat => {
              setEnvData({ ...envData, openingMinuteSat });
            }}
          />
          <Text style={styles.font5M15}>부터</Text>
        </View>
        <View style={{ ...styles.row, marginTop: 10, zIndex: 1700 }}>
          <HoursSelectList
            value={envData ? envData.closingHourSat : '00'}
            onChange={closingHourSat => {
              setEnvData({ ...envData, closingHourSat });
            }}
          />
          <MinuteSelectList
            value={envData ? envData.closingMinuteSat : '00'}
            onChange={closingMinuteSat => {
              setEnvData({ ...envData, closingMinuteSat });
            }}
          />
          <Text style={styles.font5M15}>까지</Text>
        </View>

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 일요일 </Text>

        <View style={{ ...styles.row, zIndex: 1600 }}>
          <HoursSelectList
            value={envData ? envData.openingHourSun : '00'}
            onChange={openingHourSun => {
              setEnvData({ ...envData, openingHourSun });
            }}
          />
          <MinuteSelectList
            value={envData ? envData.openingMinuteSun : '00'}
            onChange={openingMinuteSun => {
              setEnvData({ ...envData, openingMinuteSun });
            }}
          />
          <Text style={styles.font5M15}>부터</Text>
        </View>
        <View style={{ ...styles.row, marginTop: 10, zIndex: 1500 }}>
          <HoursSelectList
            value={envData ? envData.closingHourSun : '00'}
            onChange={closingHourSun => {
              setEnvData({ ...envData, closingHourSun });
            }}
          />
          <MinuteSelectList
            value={envData ? envData.closingMinuteSun : '00'}
            onChange={closingMinuteSun => {
              setEnvData({ ...envData, closingMinuteSun });
            }}
          />
          <Text style={styles.font5M15}>까지</Text>
        </View>

        <TouchableOpacity onPress={shopEnvEditApi}>
          <View style={{ ...styles.blueBtn, marginTop: 40, marginBottom: 60 }}>
            <Text style={styles.btnTxtWhite}>저장</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default OpeningHours;
