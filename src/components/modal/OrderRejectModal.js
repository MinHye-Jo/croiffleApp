import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { pt20, pt18, pt15, pt12 } from 'styles/fontSizePack';

import CustomRadioButton from 'components/button/CustomRadioButton';
import CustomCheckBox from 'components/button/CustomCheckBox';

const OrderRejectModal = ({ menuData, modalOpen, onClose, onAction }) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    modalcontainer: {
      alignItems: 'center',
      backgroundColor: '#ffff',
      padding: 20,
      height: '75%',
    },
    titleContainer: {
      flex: 7,
      paddingLeft: 15,
      alignItems: 'center',
    },
    title: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: pt20,
    },
    closeImg: {
      resizeMode: 'contain',
      height: 20,
    },
    txt: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: pt15,
    },
    txt2: {
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: pt15,
    },
    greyBox: {
      borderRadius: 5,
      width: '100%',
      borderColor: 'rgb(242, 243, 245)',
      backgroundColor: 'rgb(242, 243, 245)',
      paddingBottom: 10,
    },
    selectCom: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    inputBox: {
      borderColor: 'rgb(242, 243, 245)',
      backgroundColor: 'rgb(242, 243, 245)',
      fontFamily: 'S-CoreDream-4Regular',
      borderRadius: 5,
      fontSize: pt15,
      width: '100%',
      height: 120,
      padding: 10,
      paddingTop: 10,
    },
    blueBtn: {
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      width: '100%',
      height: 50,
      fontSize: pt20,
      backgroundColor: 'rgb(0, 191, 213)',
    },
    btnTxtWhite: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: pt18,
      color: '#ffff',
    },
    redTxt: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: pt12,
      color: 'rgb(255, 83, 83)',
      marginTop: 10,
      marginBottom: 5,
    },
  });

  // ????????? ?????????
  const [radio, setRadio] = useState({
    cancel: true,
    material: false,
    request: false,
  });
  const [etcMemo, setEtcMemo] = useState('');
  // ???????????????
  const [chkMenu, setChkMenu] = useState({});

  // ????????????
  const reasonChk = type => {
    setRadio({
      cancel: false,
      material: false,
      request: false,
      [type]: true,
    });
  };

  // ???????????? ??????
  const rejectChk = (id, checked) => {
    setChkMenu({ ...chkMenu, [id]: checked });
  };

  return (
    <Modal
      isVisible={modalOpen}
      // swipeDirection="down"
      style={styles.container}>
      <View style={styles.modalcontainer}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>?????? ??????</Text>
          </View>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => onClose()}>
            <Image source={require('../../../assets/image/icon/icon_close_b.png')} style={styles.closeImg} />
          </TouchableOpacity>
        </View>

        <ScrollView style={{ flex: 1, width: '100%' }} showsVerticalScrollIndicator={false}>
          <Text style={{ ...styles.txt, marginBottom: 5 }}>????????????</Text>
          <View style={styles.greyBox}>
            <View style={styles.selectCom}>
              <CustomRadioButton checked={radio.cancel} onChange={() => reasonChk('cancel')} />
              <Text style={styles.txt2}>?????? ?????? ??????</Text>
            </View>
            <View style={styles.selectCom}>
              <CustomRadioButton checked={radio.material} onChange={() => reasonChk('material')} />
              <Text style={styles.txt2}>?????? ??????</Text>
            </View>
            <View style={styles.selectCom}>
              <CustomRadioButton checked={radio.request} onChange={() => reasonChk('request')} />
              <Text style={styles.txt2}>???????????? ??????</Text>
            </View>
          </View>

          <View style={{ marginTop: 20, marginBottom: 10 }}>
            <Text style={{ ...styles.txt, marginBottom: 5 }}>???????????? (??????)</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="????????? ??????????????????"
              textAlignVertical="top"
              placeholderTextColor="rgb(174, 174, 174)"
              multiline={true}
              onChangeText={e => setEtcMemo(e)}
            />
          </View>

          {/* ??????????????? ????????? ???????????? */}
          {radio.material && (
            <View style={{ width: '100%', marginTop: 20 }}>
              <View
                style={{
                  borderBottomColor: 'rgb(225, 225, 225)',
                  borderBottomWidth: 1,
                  marginBottom: 30,
                }}
              />

              <View>
                <Text style={{ ...styles.txt, marginBottom: 5 }}>???????????? ????????? ??????????????????</Text>
                <View style={styles.greyBox}>
                  {menuData && menuData.length > 0
                    ? menuData.map((o, idx) => {
                        return (
                          <View key={idx} style={styles.selectCom}>
                            <CustomCheckBox
                              checked={chkMenu[o.menuId] || false}
                              onChange={checked => rejectChk(o.menuId, checked)}
                            />
                            <Text style={styles.txt2}>{o.menuName}</Text>
                          </View>
                        );
                      })
                    : null}
                </View>
              </View>
              <Text style={styles.redTxt}>???????????? ????????? ?????? ??? ?????? ????????? ?????????????????????.</Text>
            </View>
          )}
        </ScrollView>
        <TouchableOpacity
          style={styles.blueBtn}
          onPress={() => onAction({ rejectRadio: radio, rejectReason: etcMemo, rejectMenu: chkMenu })}>
          <Text style={styles.btnTxtWhite}>????????????</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default OrderRejectModal;
