import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import { pt20, pt18 } from 'styles/fontSizePack';

const StaffRequestModal = ({ modalOpen, onClose, navigation, data }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    modalcontainer: {
      width: '100%',
      height: 280,
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
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: pt18,
    },
    blueBtn: {
      flex: 1,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
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
        <View style={styles.modalcontainer}>
          <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>직원합류 승인요청</Text>
              </View>
              <TouchableOpacity style={{ flex: 1 }} onPress={() => onClose()}>
                <Image source={require('../../../assets/image/icon/icon_close_b.png')} style={styles.closeImg} />
              </TouchableOpacity>
            </View>
            <Image source={require('../../../assets/image/icon/icon_popup_b.png')} style={styles.imgContainer} />
            <Text style={styles.txt}>새로운 직원합류 승인요청이 있습니다.</Text>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <TouchableOpacity
                style={styles.blueBtn}
                onPress={() => {
                  onClose();
                  navigation.navigate('StaffManagement');
                }}>
                <Text style={styles.btnTxtWhite}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default StaffRequestModal;
