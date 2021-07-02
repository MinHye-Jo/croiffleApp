import React from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const items = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' }
];

const ApiSelectList = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(242, 243, 245)',
      fontFamily: 'S-CoreDream-4Regular',
      fontSize: 15,
      borderColor: 'rgb(242, 243, 245)',
      width: 125,
      height: 50,
      marginRight: 10
    }
  });

  return (
    <View>
      <DropDownPicker
        style={styles.container}
        // open={open}
        // value={value}
        items={items}
      // setValue={setValue}
      // setItems={setItems}
      // setOpen={setOpen}
      />
    </View>
  );
};

export default ApiSelectList;