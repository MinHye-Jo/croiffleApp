import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { pt15 } from 'styles/fontSizePack';

const initItems = [];
for (let i = 10; i < 121; i = i + 10) {
  initItems.push({ label: `${i}분`, value: `${i}` });
}

const PickupMinuteSelectList = ({ value, onChange }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(242, 243, 245)',
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: pt15,
      borderColor: 'rgb(242, 243, 245)',
      width: '100%',
      marginRight: 10,
    },
    txt: {
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: pt15,
    },
  });

  const [open, setOpen] = useState(false);

  return (
    <View>
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

export default PickupMinuteSelectList;
