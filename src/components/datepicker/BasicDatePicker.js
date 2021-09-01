import React, { useState } from 'react';
import { View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const BasicDatePicker = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <View style={{ flex: 1 }}>
      <DateTimePicker testID="dateTimePicker" value={date} mode="date" display="spinner" onChange={onChange} />
    </View>
  );
};

export default BasicDatePicker;
