import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { pt15 } from 'styles/fontSizePack';

const PositionSelectList = ({ value, onChange, disabled }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(242, 243, 245)',
      borderColor: 'rgb(242, 243, 245)',
      borderRadius: 5,
    },
    txt: {
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: pt15,
    },
  });

  const items = [
    { label: '선택', value: 0 },
    { label: '관리자', value: 'ROLE_SHOP_ADMIN' },
    { label: '직원', value: 'ROLE_EMPLOYEE' },
  ];

  const [selectValue, setSelectValue] = useState(0);
  const [open, setOpen] = useState(false);
  const disableFlag = disabled ? disabled : false;

  useEffect(() => {
    setSelectValue(value);
  }, [items, value]);

  return (
    <DropDownPicker
      style={styles.container}
      textStyle={styles.txt}
      dropDownContainerStyle={{ backgroundColor: 'rgb(242, 243, 245)' }}
      open={open}
      value={selectValue}
      items={items}
      disabled={disableFlag}
      setOpen={setOpen}
      setValue={getValue => {
        onChange(getValue());
      }}
      listMode="SCROLLVIEW"
    />
  );
};

export default PositionSelectList;
