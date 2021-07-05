import React from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import Postcode from 'react-native-daum-postcode';

const FindPostCode = ({ modalOpen, onClose, onSelect }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    daumPostView: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '80%',
      height: '50%',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      padding: 10,
      borderRadius: 10
    },
  });

  return (
    <Modal isVisible={modalOpen} onBackdropPress={() => onClose()}>
      <View style={styles.container}>
        <View style={{ width: 350, height: 500 }}>
          <Postcode
            jsOptions={{ animation: true }}
            onSelected={(data) => {
              onSelect(data);
            }} />
        </View>
      </View>
    </Modal>
  );
};

export default FindPostCode;
