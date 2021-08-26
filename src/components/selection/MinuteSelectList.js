import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { pt15 } from 'styles/fontSizePack';

const initItems = [{ label: '00분', value: '00' }];
for (let i = 10; i < 60; i = i + 10) {
  initItems.push({ label: `${i}분`, value: `${i}` });
}

const MinuteSelectList = ({ value, onChange, openFlag, openCtrl }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(242, 243, 245)',
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: pt15,
      borderColor: 'rgb(242, 243, 245)',
      width: 150,
      marginRight: 10,
    },
    txt: {
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: pt15,
    },
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(openFlag);
  }, [openFlag]);

  return (
    <View>
      <DropDownPicker
        style={styles.container}
        textStyle={styles.txt}
        dropDownContainerStyle={{ backgroundColor: 'rgb(242, 243, 245)' }}
        open={open}
        value={value}
        items={initItems}
        onOpen={() => openCtrl()}
        setOpen={setOpen}
        setValue={getValue => {
          onChange(getValue());
        }}
        listMode="SCROLLVIEW"
      />
    </View>
  );
};

export default MinuteSelectList;
