import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const BasicDatePicker = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(242, 243, 245)',
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: 15,
      borderColor: 'rgb(242, 243, 245)',
      width: 125,
      height: 50,
      marginRight: 10,
    },
  });

  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    console.log(currentDate);
  };

  return (
    <View style={{ flex: 1 }}>
      <DateTimePicker testID="dateTimePicker" value={date} mode="date" display="spinner" onChange={onChange} />
    </View>
  );
};

export default BasicDatePicker;
