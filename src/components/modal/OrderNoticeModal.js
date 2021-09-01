import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import { pt20, pt18 } from 'styles/fontSizePack';

const OrderNoticeModal = ({ modalOpen, onClose, navigation, data }) => {
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
    redBtn: {
      flex: 1,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      fontSize: pt20,
      marginRight: 10,
      backgroundColor: 'rgb(255, 96, 1)',
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
                <Text style={styles.title}>알림</Text>
              </View>
              <TouchableOpacity style={{ flex: 1 }} onPress={() => onClose()}>
                <Image source={require('../../../assets/image/icon/icon_close_b.png')} style={styles.closeImg} />
              </TouchableOpacity>
            </View>
            <Image source={require('../../../assets/image/icon/icon_list_b.png')} style={styles.imgContainer} />
            <Text style={styles.txt}>새로운 주문이 들어왔습니다.</Text>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <TouchableOpacity
                style={styles.redBtn}
                onPress={() => {
                  onClose();
                  navigation.navigate('OrderDetail', { orderId: data[0].orderId });
                }}>
                <View>
                  <Text style={styles.btnTxtWhite}>상세보기</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.blueBtn}
                onPress={() => {
                  onClose();
                  navigation.navigate('OrderHistory');
                }}>
                <Text style={styles.btnTxtWhite}>주문내역</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default OrderNoticeModal;
