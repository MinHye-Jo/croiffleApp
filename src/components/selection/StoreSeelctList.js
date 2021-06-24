import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


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
  const [value, setValue] = useState('갈매점');
  const [items, setItems] = useState([
    { label: '갈매점', value: '갈매점' },
    { label: '광화문점', value: '광화문점' }
  ]);

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
    // setItems={setItems}
    />
  );
};

export default StoreSeelctList;