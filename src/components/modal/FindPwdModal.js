import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import { pt20, pt18, pt15 } from 'styles/fontSizePack';

const FindPwdModal = ({ modalOpen, onClose, navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    modalcontainer: {
      width: '100%',
      height: '37%',
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
    redTxt: {
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: pt15,
      color: 'rgb(255, 83, 83)',
      marginTop: 10,
      marginBottom: 5,
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
  });

  const btnAction = () => {
    onClose();
    navigation.navigate('LoginPage');
  };

  return (
    <Modal isVisible={modalOpen}>
      <View style={styles.container}>
        <View style={styles.modalcontainer}>
          <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>비밀번호 찾기</Text>
              </View>
              <TouchableOpacity style={{ flex: 1 }} onPress={() => onClose()}>
                <Image source={require('../../../assets/image/icon/icon_close_b.png')} style={styles.closeImg} />
              </TouchableOpacity>
            </View>
            <Image source={require('../../../assets/image/icon/icon_popup_b.png')} style={styles.imgContainer} />
            <Text style={styles.txt}>초기화된 비밀번호를 </Text>
            <Text style={styles.txt}>휴대폰 번호로 보내드렸습니다.</Text>
            <Text style={styles.redTxt}>※ [개인정보관리]에서 변경 가능합니다.</Text>

            <TouchableOpacity style={styles.blueBtn} onPress={() => btnAction()}>
              <Text style={styles.btnTxtWhite}>로그인 하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FindPwdModal;
