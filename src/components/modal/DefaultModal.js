import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';

const DefaultModal = ({ modalOpen, onClose, modalText }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    modalcontainer: {
      width: '100%',
      height: '32%',
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
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: 15
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
  });


  return (
    <Modal isVisible={modalOpen}>
      <View style={styles.container}>
        <View style={styles.modalcontainer} >
          <View style={styles.container}>
            <Text style={styles.title}>알림</Text>
            <Image source={require('../../../assets/image/icon/icon_popup_b.png')} style={styles.imgContainer} />
            <Text style={styles.txt}>{modalText}</Text>
            {/* <Text style={styles.txt}>뭐시기 뭐시기 ~~~</Text> */}

            <TouchableOpacity style={styles.blueBtn} onPress={() => onClose()}>
              <View>
                <Text style={styles.btnTxtWhite}>확인</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </Modal >
  );
};

export default DefaultModal;