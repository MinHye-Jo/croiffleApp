import DefaultActionModal from 'components/modal/DefaultActionModal';
import { shopStaffList, shopStaffManage } from 'services/shop';
import styles from 'styles/commonStyle';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';

const StaffManagement = ({ route }) => {
  const shopId = userInfo.shopId;
  const [staffList, setStaffList] = useState(null);
  const [actType, setActType] = useState(null);
  const [userId, setUserId] = useState(null);

  // 모달 데이터
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');

  useEffect(() => {
    staffListApi();
  }, []);

  // 직원 목록 조회 API
  const staffListApi = async () => {
    const { data } = await shopStaffList(shopId);
    if (data.return_code == 200) {
      setStaffList(data.response);
    }
  };

  // 타입별 액션처리  1 : 승인, 2 : 거절, 3 : 퇴직처리
  const setTypeActions = (type, data) => {
    setActType(type);
    setUserId(data);

    switch (type) {
      case '1':
        setModalOpen(true);
        setModalTitle('직원합류 승인');
        setModalText('직원으로 승인하시겠습니까?');
        break;
      case '2':
        setModalOpen(true);
        setModalTitle('직원합류 거부');
        setModalText('직원으로 거부하시겠습니까?');
        break;
      case '3':
        setModalOpen(true);
        setModalTitle('퇴직처리');
        setModalText('직원을 퇴직처리 하시겠습니까?');
        break;
    }
  };

  const shopStaffManageApi = async () => {
    setModalOpen(false);
    const { data } = await shopStaffManage(shopId, userId, actType);

    if (data.return_code == 200) {
      staffListApi();
    }
  };

  return (
    <ScrollView style={styles.topContainer} showsVerticalScrollIndicator={false}>
      <DefaultActionModal
        modalOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onAction={() => shopStaffManageApi()}
        title={modalTitle}
        modalText={modalText}
      />

      <View style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 30 }}>
        <Text style={{ ...styles.font5M15, marginTop: 40 }}>직원목록</Text>
        {staffList
          ? staffList.map((e, idx) => {
              if (e.adminConfirm == '0') {
                return (
                  <View key={idx} style={{ ...styles.storeGreyBox, marginTop: 10 }}>
                    <View style={styles.rowFlex2Left}>
                      <Text style={styles.font5M15}> {e.userName} </Text>
                    </View>
                    <View style={styles.row}>
                      <TouchableOpacity
                        style={{ ...styles.blueBtn, height: 30, width: 38, marginRight: 5 }}
                        onPress={() => setTypeActions('1', e.userId)}>
                        <Text style={styles.btnTxtWhite}>승인</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{ ...styles.whiteBtn, height: 30, width: 38, marginRight: 10 }}
                        onPress={() => setTypeActions('2', e.userId)}>
                        <Text style={styles.btnTxtRed}>거부</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }
            })
          : null}
        {staffList
          ? staffList.map((e, idx) => {
              if (e.adminConfirm == '1') {
                return (
                  <View key={idx} style={{ ...styles.storeGreyBox, marginTop: 10 }}>
                    <View style={styles.rowFlex2Left}>
                      <Text style={styles.font5M15}> {e.userName} </Text>
                    </View>
                    <TouchableOpacity
                      style={{ ...styles.greyBtn, height: 30, width: 80, marginRight: 10 }}
                      onPress={() => setTypeActions('3', e.userId)}>
                      <Text style={styles.btnTxtWhite}>퇴직처리</Text>
                    </TouchableOpacity>
                  </View>
                );
              }
            })
          : null}
      </View>
    </ScrollView>
  );
};

export default StaffManagement;
