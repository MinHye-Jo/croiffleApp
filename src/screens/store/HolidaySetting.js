import React, { useEffect, useState } from 'react';

import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

import styles from 'styles/commonStyle';
import WeekSelectList from 'components/selection/WeekSelectList';
import DaySelectList from 'components/selection/DaySelectList';
import AddButton from 'components/button/AddButton';
import OnOffSwitchWhite from 'components/switch/OnOffSwitchWhite';
import DatePickerModal from 'components/datepicker/DatePickerModal';
import DefaultModal from 'components/modal/DefaultModal';

import { shopDetail, getHoliday, setHoliday, holidayClose } from 'services/shop';
import moment from 'moment';

const tmpDate = moment(new Date()).format('YYYYMMDD');

let regIndex = 5000;
let tmpIndex = 4000;

const HolidaySetting = props => {
  const shopId = window.userInfo.shopId;

  const basicRegData = { type: '1', regularType: '1', dayOfWeek: '1', shopId: shopId };
  const basicTmpData = { type: '2', startDate: tmpDate, endDate: tmpDate, shopId: shopId };

  // type ( 1: 정기휴무, 2: 임시휴무)
  const [holidayData, setHolidayData] = useState([
    { type: '1', regularType: '1', dayOfWeek: '1', shopId: shopId },
    { type: '2', startDate: tmpDate, endDate: tmpDate, shopId: shopId },
  ]);

  //공휴일
  const [holidayFlag, setHolidayFlag] = useState('1');

  // 모달 데이터
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');

  useEffect(async () => {
    const { data: shopDetailData } = await shopDetail(shopId, 0, 0);
    if (shopDetailData.return_code == 200) {
      setHolidayFlag(shopDetailData.response.holidayClosed);
    }

    const { data: holidayList } = await getHoliday(shopId);
    if (holidayList.return_code == 200 && holidayList.response.length) {
      setHolidayData(holidayList.response);
    }
  }, []);

  // 추가 버튼
  const addBtnAction = type => {
    setHolidayData(holidayData.concat(type == '1' ? basicRegData : basicTmpData));
  };

  // 삭제 버튼
  const deleteBtnAction = idx => {
    const data = [...holidayData];

    data.splice(idx, 1);
    setHolidayData(data);
  };

  // 정기휴무 타입 및 임시휴무 날짜 지정
  const setTypeAndDate = (type, value, idx) => {
    const data = [...holidayData];

    const val = type == 'regularType' || type == 'dayOfWeek' ? value : moment(value).format('YYYYMMDD');

    data[idx][type] = val;
    setHolidayData(data);
  };

  // 공휴일 휴무 설정
  const holidayCloseApi = async () => {
    const { data } = await holidayClose(shopId);
    if (data.return_code == 200) {
      setHolidayFlag(data.response);
    } else {
      setModalOpen(true);
      setModalText(data.return_message);
    }
  };

  // 임시휴무 데이터 셋팅
  const saveAction = async () => {
    const bodyData = { shopId: shopId, shopHolidayList: holidayData };
    const { data } = await setHoliday(bodyData);

    if (data.return_code == 200) {
      setModalOpen(true);
      setModalTitle('휴무일 설정');
      setModalText('저장 되었습니다.');
    } else {
      setModalOpen(true);
      setModalTitle('휴무일 설정실패');
      setModalText(data.return_message);
    }
  };

  return (
    <ScrollView style={styles.topContainer}>
      <DefaultModal
        modalOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        modalTitle={modalTitle}
        modalText={modalText}
      />

      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <View style={{ ...styles.row, flex: 1, marginTop: 30 }}>
          <Text style={{ ...styles.font5M15, marginBottom: 5, flex: 2 }}> 정기휴무 </Text>
          <AddButton onClick={() => addBtnAction('1')} />
        </View>

        {holidayData.length
          ? holidayData.map((o, idx) => {
              if (o.type == '1') {
                return (
                  <View style={{ ...styles.row, flex: 1, marginTop: 10, zIndex: regIndex-- }}>
                    <WeekSelectList value={o.regularType} onChange={e => setTypeAndDate('regularType', e, idx)} />
                    <DaySelectList value={o.dayOfWeek} onChange={e => setTypeAndDate('dayOfWeek', e, idx)} />
                    <View
                      style={{
                        ...styles.greyBox,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 50,
                      }}>
                      <TouchableOpacity onPress={() => deleteBtnAction(idx)}>
                        <Text style={styles.redText}>삭제</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }
            })
          : null}

        <View style={{ ...styles.row, flex: 1, marginTop: 30 }}>
          <Text style={{ ...styles.font5M15, marginBottom: 5, flex: 2 }}> 임시 휴무 </Text>
          <AddButton onClick={() => addBtnAction('2')} />
        </View>

        {holidayData.length
          ? holidayData.map((o, idx) => {
              if (o.type == '2') {
                return (
                  <View style={{ ...styles.row, flex: 1, marginTop: 10, zIndex: tmpIndex-- }}>
                    <DatePickerModal dateVal={o.startDate} onChange={e => setTypeAndDate('startDate', e, idx)} />
                    <DatePickerModal dateVal={o.endDate} onChange={e => setTypeAndDate('endDate', e, idx)} />
                    <View
                      style={{
                        ...styles.greyBox,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 50,
                      }}>
                      <TouchableOpacity onPress={() => deleteBtnAction(idx)}>
                        <Text style={styles.redText}>삭제</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }
            })
          : null}

        <View style={{ ...styles.storeGreyBox, marginTop: 30 }}>
          <View style={styles.rowFlex2Left}>
            <Text style={styles.font5M15}> 공휴일 </Text>
          </View>
          <OnOffSwitchWhite onClick={data => holidayCloseApi()} flagVal={holidayFlag} />
        </View>

        <TouchableOpacity onPress={saveAction}>
          <View style={{ ...styles.blueBtn, marginTop: 30, marginBottom: 40 }}>
            <Text style={styles.btnTxtWhite}>저장</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HolidaySetting;
