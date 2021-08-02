import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from 'styles/commonStyle';
import StoreManageSetButton from 'components/button/StoreManageSetButton';
import OnOffSwitchGrey from 'components/switch/OnOffSwitchGrey';
import DefaultModal from 'components/modal/DefaultModal';

import { getUserInfo } from 'services/auth';
import { suspension, notification } from 'services/shop';

const StoreManagement = props => {
  const shopId = window.userInfo.shopId;
  const [shopName, setShopName] = useState('');
  const [pause, setPause] = useState(1);
  const [noti, setNoti] = useState(1);

  // 모달 데이터
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');

  useEffect(async () => {
    const { data } = await getUserInfo();

    if (data.return_code == 200) {
      setShopName(data.response.shopName);
      setPause(Number(data.response.businessSuspension));
      setNoti(Number(data.response.notificationSetting));
    }
  }, []);

  // 영업 일시중지
  const setPauseApi = async () => {
    const { data } = await suspension(shopId);
    if (data.return_code == 200) {
      setPause(Number(data.response));
    } else {
      setModalOpen(true);
      setModalText(data.return_message);
    }
  };

  // 알림설정
  const setNotiApi = async () => {
    const { data } = await notification(shopId);
    if (data.return_code == 200) {
      setNoti(Number(data.response));
    } else {
      setModalOpen(true);
      setModalText(data.return_message);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: 'rgb(242, 243, 245)', padding: 20 }}>
      <DefaultModal modalOpen={modalOpen} onClose={() => setModalOpen(false)} modalText={modalText} />

      <View style={styles.storeWhiteBox}>
        <View style={styles.rowFlex2Left}>
          <Text style={styles.font5M15}> 매장 </Text>
        </View>
        <View
          style={{
            ...styles.greyBox,
            marginRight: 10,
            height: 30,
            minWidth: 80,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.font5M15}> {shopName} </Text>
        </View>
      </View>

      <View style={{ ...styles.storeWhiteBox, marginTop: 10 }}>
        <View style={styles.rowFlex2Left}>
          <Text style={styles.font5M15}> 영업 일시중지 </Text>
        </View>
        <OnOffSwitchGrey onClick={data => setPauseApi()} flagVal={pause} />
      </View>

      <View style={{ ...styles.storeWhiteBox, marginTop: 10 }}>
        <View style={styles.rowFlex2Left}>
          <Text style={styles.font5M15}> 매장정보 수정 </Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('StoreInfoEdit', { shopId })}>
          <StoreManageSetButton />
        </TouchableOpacity>
      </View>

      <View style={{ ...styles.storeWhiteBox, marginTop: 10 }}>
        <View style={styles.rowFlex2Left}>
          <Text style={styles.font5M15}> 영업시간 설정 </Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('OpeningHours', { shopId })}>
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
        <TouchableOpacity onPress={() => props.navigation.navigate('MenuManagement', { shopId })}>
          <StoreManageSetButton />
        </TouchableOpacity>
      </View>

      <View style={{ ...styles.storeWhiteBox, marginTop: 10 }}>
        <View style={styles.rowFlex2Left}>
          <Text style={styles.font5M15}> 알림설정 </Text>
        </View>
        <OnOffSwitchGrey onClick={data => setNotiApi()} flagVal={noti} />
      </View>

      {/* 추후 오픈 예정
      <View style={{ ...styles.storeWhiteBox, marginTop: 10 }}>
        <View style={styles.rowFlex2Left}>
          <Text style={styles.font5M15}> 버전정보 </Text>
        </View>
        <View
          style={{
            ...styles.greyBox,
            marginRight: 10,
            width: 80,
            alignItems: 'center',
            height: 30,
            justifyContent: 'center',
          }}>
          <Text style={styles.font5M15}> 업데이트 </Text>
        </View>
      </View>

      <View style={{ ...styles.storeWhiteBox, marginTop: 10 }}>
        <View style={styles.row}>
          <Text style={styles.font5M15}> 도움말 </Text>
          <Text style={styles.font5M15}> 다운로드 </Text>
        </View>
      </View> */}
    </ScrollView>
  );
};

export default StoreManagement;
