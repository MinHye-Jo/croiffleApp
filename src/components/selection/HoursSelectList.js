import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { pt15 } from 'styles/fontSizePack';

const initItems = [{ label: '오전00시', value: '00' }];
for (let i = 1; i < 24; i++) {
  if (i < 12) {
    initItems.push({ label: i < 10 ? `오전0${i}시` : `오전${i}시`, value: i < 10 ? `0${i}` : `${i}` });
  } else {
    const hour = i == 12 ? 12 : i - 12;
    initItems.push({ label: hour < 10 ? `오후0${hour}시` : `오후${hour}시`, value: `${i}` });
  }
}

const HoursSelectList = ({ value, onChange }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(242, 243, 245)',
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: pt15,
      borderColor: 'rgb(242, 243, 245)',
      width: 150,
    },
    txt: {
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: pt15,
    },
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
        setValue={getValue => {
          onChange(getValue());
        }}
        listMode="SCROLLVIEW"
      />
    </View>
  );
};

export default HoursSelectList;
