import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { shopList } from '@service/shop';

const StoreSelectList = ({ value, onChange }) => {
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

  const initItems = [{ label: '선택', value: 0 }];

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(initItems);

  useEffect(async () => {
    const { data } = await shopList();
    if (data.response) {
      data.response.map(o => initItems.push({ label: o.shopName, value: o.shopId }))
    }

    setItems(initItems);
  }, []);

  return (
    <DropDownPicker
      style={styles.container}
      textStyle={styles.txt}
      dropDownContainerStyle={{ backgroundColor: 'rgb(242, 243, 245)', }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={(getValue) => {
        onChange(getValue());
      }}
      listMode="SCROLLVIEW"
    />
  );
};

export default StoreSelectList;