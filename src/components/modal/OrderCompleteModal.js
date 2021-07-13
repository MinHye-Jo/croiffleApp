import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

const OrderCompleteModal = ({ modalOpen, onClose, onAction }) => {
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
    content: {
      marginTop: 20,
      marginBottom: 10,
      width: '100%'
    },
    txt: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 15
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
      marginTop: 20,
      width: '100%',
      height: 50,
      fontSize: 20,
      backgroundColor: 'rgb(0, 191, 213)'
    },
    btnTxtWhite: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 18,
      color: '#ffff'
    }
  });

  const [etcMemo, setEtcMemo] = useState('');

  return (
    <Modal
      isVisible={modalOpen}
      swipeDirection="down"
      style={styles.container}>
      <View style={styles.modalcontainer}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>완료처리</Text>
          </View>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => onClose()}>
            <Image source={require('../../../assets/image/icon/icon_close_b.png')} style={styles.closeImg} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={{ ...styles.txt, marginBottom: 10 }}>특이사항 (선택)</Text>
          <TextInput style={styles.inputBox}
            placeholder="내용을 입력해주세요"
            placeholderTextColor='rgb(174, 174, 174)'
            multiline={true}
            onChangeText={e => setEtcMemo(e)} />
        </View>

        <TouchableOpacity style={styles.blueBtn}
          onPress={() => onAction(etcMemo)}>
          <Text style={styles.btnTxtWhite}>완료처리</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default OrderCompleteModal;