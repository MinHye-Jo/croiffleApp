import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { shopList } from 'services/shop';

const StoreSelectList = ({ value, onChange, disabled }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(242, 243, 245)',
      borderColor: 'rgb(242, 243, 245)',
      borderRadius: 5
    },
    txt: {
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: 15,
    }
  });

  const [selectValue, setSelectValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const disableFlag = disabled ? disabled : false;

  // 매장정보 불러오기
  useEffect(async () => {
    const dataItems = [{ label: '선택', value: 0 }];
    const { data } = await shopList();

    if (data.response) {
      data.response.map(o => dataItems.push({ label: o.shopName, value: o.shopId }))
    }

    setItems(dataItems);
  }, []);

  useEffect(() => {
    setSelectValue(value);
  }, [items, value]);

  return (
    <DropDownPicker
      style={styles.container}
      textStyle={styles.txt}
      dropDownContainerStyle={{ backgroundColor: 'rgb(242, 243, 245)', }}
      open={open}
      value={selectValue}
      items={items}
      disabled={disableFlag}
      setOpen={setOpen}
      setValue={(getValue) => {
        onChange(getValue());
      }}
      listMode="SCROLLVIEW"
    />
  );
};

export default StoreSelectList;