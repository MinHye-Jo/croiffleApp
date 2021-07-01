import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { shopList } from '@service/shop';

const StoreSeelctList = () => {
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

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  let items = [{ label: '선택', value: '' }];

  useEffect(async () => {
    const re = await shopList();
    console.log("==========")
    console.log(re)
  }, []);

  //  items = [
  //   { label: '선택', value: '' },
  //   { label: '갈매점', value: '갈매점' },
  //   { label: '광화문점', value: '광화문점' }
  // ];

  return (
    <DropDownPicker
      style={styles.container}
      textStyle={styles.txt}
      dropDownContainerStyle={{ backgroundColor: 'rgb(242, 243, 245)', }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      listMode="SCROLLVIEW"
    />
  );
};

export default StoreSeelctList;