import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const initItems = [
  { label: '매주', value: "1" },
  { label: '매월 첫째', value: "2" },
  { label: '매월 둘째', value: "3" },
  { label: '매월 셋째', value: "4" },
  { label: '매월 넷째', value: "5" },
  { label: '매월 다섯째', value: "6" },
];

const WeekSelectList = ({ value, onChange }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(242, 243, 245)',
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: 15,
      borderColor: 'rgb(242, 243, 245)',
      width: 125
    },
    txt: {
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: 15,
    }
  });

  const [open, setOpen] = useState(false);

  return (
    <View style={{ marginRight: 10 }}>
      <DropDownPicker
        style={styles.container}
        textStyle={styles.txt}
        dropDownContainerStyle={{ backgroundColor: 'rgb(242, 243, 245)' }}
        open={open}
        value={value}
        items={initItems}
        setOpen={setOpen}
        setValue={(getValue) => {
          onChange(getValue());
        }}
        listMode="SCROLLVIEW"
      />
    </View>
  );
};

export default WeekSelectList;