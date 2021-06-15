import React from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const items = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' }
];

const StoreSeelctList = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(242, 243, 245)',
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: 15,
      borderColor: 'rgb(242, 243, 245)'
    }
  });

  return (
    <DropDownPicker
      style={styles.container}
      // open={open}
      // value={value}
      items={items}
    // setValue={setValue}
    // setItems={setItems}
    // setOpen={setOpen}
    />
  );
};

export default StoreSeelctList;