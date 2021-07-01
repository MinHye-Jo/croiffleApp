import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';

const FindIdModal = ({ modalOpen, onClose, modalText, navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    modalcontainer: {
      width: '100%',
      height: '40%',
      borderRadius: 10,
      backgroundColor: 'white',
      alignItems: 'center',
      padding: 20
    },
    imgContainer: {
      resizeMode: 'contain',
      height: 75,
      marginTop: 20,
      marginBottom: 20
    },
    title: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 20,
    },
    txt: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 18
    },
    redBtn: {
      flex: 1,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      fontSize: 20,
      marginRight: 10,
      backgroundColor: 'rgb(255, 96, 1)'
    },
    blueBtn: {
      flex: 1,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      fontSize: 20,
      backgroundColor: 'rgb(0, 191, 213)'
    },
    btnTxtWhite: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 18,
      color: '#ffff'
    },
  });

  const btnAction = (type) => {
    onClose();
    navigation.navigate(type);
  }

  return (
    <Modal isVisible={modalOpen}>
      <View style={styles.container}>
        <View style={styles.modalcontainer} >
          <View style={styles.container}>
            <Text style={styles.title}>아이디 찾기</Text>
            <Image source={require('../../../assets/image/icon/icon_popup_b.png')} style={styles.imgContainer} />
            <Text style={styles.txt}>회원님의 아이디는</Text>
            <Text style={{ ...styles.txt, color: 'rgb(0, 191, 213)' }}>{modalText}</Text>
            <Text style={styles.txt}>입니다.</Text>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <TouchableOpacity style={styles.redBtn} onPress={() => btnAction('FindPassword')}>
                <View>
                  <Text style={styles.btnTxtWhite}>비밀번호 찾기</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.blueBtn} onPress={() => btnAction('LoginPage')}>
                <View>
                  <Text style={styles.btnTxtWhite}>로그인 하기</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal >
  );
};

export default FindIdModal;
