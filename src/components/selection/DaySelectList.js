import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const initItems = [
  { label: '월요일', value: '1' },
  { label: '화요일', value: '2' },
  { label: '수요일', value: '3' },
  { label: '목요일', value: '4' },
  { label: '금요일', value: '5' },
  { label: '토요일', value: '6' },
  { label: '일요일', value: '7' },
];

const DaySelectList = ({ value, onChange }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(242, 243, 245)',
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: 15,
      borderColor: 'rgb(242, 243, 245)',
      width: '100%',
    },
    txt: {
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: 15,
    },
  });

  const [open, setOpen] = useState(false);

  return (
    <View style={{ flex: 1, marginRight: 10 }}>
      <DropDownPicker
        style={styles.container}
        textStyle={styles.txt}
        dropDownContainerStyle={{ backgroundColor: 'rgb(242, 243, 245)' }}
        open={open}
        value={value}
        items={initItems}
        setOpen={setOpen}
        setValue={getValue => {
          onChange(getValue());
        }}
        listMode="SCROLLVIEW"
      />
    </View>
  );
};

export default DaySelectList;
