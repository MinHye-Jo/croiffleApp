import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import { pt20, pt18, pt15 } from 'styles/fontSizePack';

const DefaultModal = ({ modalOpen, onClose, title, modalText, modalTextSec, modalTextThi }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    modalcontainer: {
      width: '100%',
      height: 265,
      borderRadius: 10,
      backgroundColor: 'white',
      alignItems: 'center',
      padding: 20,
    },
    modalcontainer2: {
      width: '100%',
      height: 285,
      borderRadius: 10,
      backgroundColor: 'white',
      alignItems: 'center',
      padding: 20,
    },
    modalcontainer3: {
      width: '100%',
      height: 305,
      borderRadius: 10,
      backgroundColor: 'white',
      alignItems: 'center',
      padding: 20,
    },
    titleContainer: {
      flex: 7,
      paddingLeft: 15,
      alignItems: 'center',
    },
    closeImg: {
      resizeMode: 'contain',
      height: 20,
    },
    imgContainer: {
      resizeMode: 'contain',
      height: 75,
      marginTop: 20,
      marginBottom: 20,
    },
    title: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: pt20,
    },
    txt: {
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: pt15,
    },
    blueBtn: {
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
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
  });

  return (
    <Modal isVisible={modalOpen}>
      <View style={styles.container}>
        <View
          style={modalTextThi ? styles.modalcontainer3 : modalTextSec ? styles.modalcontainer2 : styles.modalcontainer}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{!title ? '알림' : title}</Text>
            </View>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => onClose()}>
              <Image source={require('../../../assets/image/icon/icon_close_b.png')} style={styles.closeImg} />
            </TouchableOpacity>
          </View>
          <Image source={require('../../../assets/image/icon/icon_popup_b.png')} style={styles.imgContainer} />
          <Text style={styles.txt}>{modalText}</Text>
          {modalTextSec ? <Text style={styles.txt}>{modalTextSec}</Text> : null}
          {modalTextThi ? <Text style={styles.txt}>{modalTextThi}</Text> : null}
          <TouchableOpacity style={styles.blueBtn} onPress={() => onClose()}>
            <Text style={styles.btnTxtWhite}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DefaultModal;
