import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const DatePickerModal = ({ dateVal, onChange }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(242, 243, 245)',
      fontFamily: 'S-CoreDream-4Regular',
      borderColor: 'rgb(242, 243, 245)',
      borderRadius: 5,
      width: 125,
      height: 50,
      marginRight: 10,
      padding: 10,
    },
    modalCon: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    img: {
      resizeMode: 'contain',
      width: 25,
      marginLeft: 5,
      right: 0,
    },
  });

  const dateRe = dateVal.replace(/([0-9]{4})([0-9]{2})([0-9]{2})/g, '$1-$2-$3');
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(dateRe);

  const handleConfirm = val => {
    setDate(moment(val).format('YYYY-MM-DD'));
    onChange(val);
    setVisible(false);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => setVisible(true)}>
      <View style={styles.modalCon}>
        <Text>{date}</Text>
        <Image style={styles.img} source={require('../../../assets/image/icon/icon_down_b.png')} />

        <DateTimePickerModal
          isVisible={visible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={() => setVisible(false)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default DatePickerModal;
