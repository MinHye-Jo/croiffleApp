import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

import CustomRadioButton from '@components/button/CustomRadioButton';
import CustomCheckBox from '@components/button/CustomCheckBox';

const OrderRejectModal = ({ menuData, modalOpen, onClose, onAction }) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-end',
      margin: 0
    },
    modalcontainer: {
      alignItems: 'center',
      backgroundColor: '#ffff',
      padding: 20,
      height: '75%'
    },
    titleContainer: {
      flex: 7,
      paddingLeft: 15,
      alignItems: 'center'
    },
    title: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 20,
    },
    closeImg: {
      resizeMode: 'contain',
      height: 20
    },
    txt: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 15
    },
    txt2: {
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: 15
    },
    greyBox: {
      borderRadius: 5,
      width: '100%',
      borderColor: 'rgb(242, 243, 245)',
      backgroundColor: 'rgb(242, 243, 245)',
      paddingBottom: 10
    },
    selectCom: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10
    },
    inputBox: {
      borderColor: 'rgb(242, 243, 245)',
      backgroundColor: 'rgb(242, 243, 245)',
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: 15,
      width: '100%',
      height: 120,
      padding: 10
    },
    blueBtn: {
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      width: '100%',
      height: 50,
      fontSize: 20,
      backgroundColor: 'rgb(0, 191, 213)'
    },
    btnTxtWhite: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 18,
      color: '#ffff'
    },
    redTxt: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 12,
      color: 'rgb(255, 83, 83)',
      marginTop: 10,
      marginBottom: 5
    }
  });

  // 라디오 버튼용
  const [radio, setRadio] = useState({
    cancel: true,
    material: false,
    request: false
  });
  const [etcMemo, setEtcMemo] = useState('');
  // 체크박스용
  const [chkMenu, setChkMenu] = useState({});

  // 거부사유
  const reasonChk = (type) => {
    setRadio({
      cancel: false,
      material: false,
      request: false,
      [type]: true,
    });
  }

  // 품절처리 항목
  const rejectChk = (id, checked) => {
    setChkMenu({ ...chkMenu, [id]: checked });
  }

  return (
    <Modal
      isVisible={modalOpen}
      // swipeDirection="down"
      style={styles.container}>
      <View style={styles.modalcontainer}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>주문 거부</Text>
          </View>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => onClose()}>
            <Image source={require('../../../assets/image/icon/icon_close_b.png')} style={styles.closeImg} />
          </TouchableOpacity>
        </View>

        <ScrollView style={{ flex: 1, width: '100%' }}>
          <Text style={{ ...styles.txt, marginBottom: 5 }}>거부사유</Text>
          <View style={styles.greyBox}>
            <View style={styles.selectCom}>
              <CustomRadioButton checked={radio.cancel} onChange={() => reasonChk('cancel')} />
              <Text style={styles.txt2}>업소 사정 취소</Text>
            </View>
            <View style={styles.selectCom}>
              <CustomRadioButton checked={radio.material} onChange={() => reasonChk('material')} />
              <Text style={styles.txt2}>재료 소진</Text>
            </View>
            <View style={styles.selectCom}>
              <CustomRadioButton checked={radio.request} onChange={() => reasonChk('request')} />
              <Text style={styles.txt2}>요청사항 불가</Text>
            </View>
          </View>

          <View style={{ marginTop: 20, marginBottom: 10 }}>
            <Text style={{ ...styles.txt, marginBottom: 5 }}>특이사항 (선택)</Text>
            <TextInput style={styles.inputBox}
              placeholder="내용을 입력해주세요"
              placeholderTextColor='rgb(174, 174, 174)'
              multiline={true}
              onChangeText={e => setEtcMemo(e)} />
          </View>

          {/* 재료소진일 경우만 보이도록 */}
          {radio.material && <View style={{ width: '100%', marginTop: 20 }}>
            <View style={{
              borderBottomColor: "rgb(225, 225, 225)",
              borderBottomWidth: 1,
              marginBottom: 30
            }} />

            <View>
              <Text style={{ ...styles.txt, marginBottom: 5 }}>품절처리 항목을 선택해주세요</Text>
              <View style={styles.greyBox}>
                {menuData && menuData.length > 0 &&
                  menuData.map(o => {
                    return (
                      <View style={styles.selectCom}>
                        <CustomCheckBox checked={chkMenu[o.menuId] || false}
                          onChange={(checked) => rejectChk(o.menuId, checked)} />
                        <Text style={styles.txt2}>{o.menuName}</Text>
                      </View>
                    )
                  }
                  )}
              </View>
            </View>
            <Text style={styles.redTxt}>선택하신 항목은 다음 날 오픈 전까지 품절처리됩니다.</Text>
          </View>}

        </ScrollView>
        <TouchableOpacity style={styles.blueBtn}
          onPress={() => onAction({ rejectRadio: radio, rejectReason: etcMemo, rejectMenu: chkMenu })}>
          <Text style={styles.btnTxtWhite}>주문거부</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default OrderRejectModal;