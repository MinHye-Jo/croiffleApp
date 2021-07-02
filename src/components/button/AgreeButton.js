import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const AgreeButton = ({ navigation, route, type }) => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      fontSize: 20,
      backgroundColor: 'rgb(0, 191, 213)',
      borderRadius: 5
    },
    text: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: 18,
      color: '#fff'
    }
  });

  return (
    <TouchableOpacity style={styles.container}
      onPress={() => {
        navigation.goBack();
        route.params.onAgree(type);
      }}>
      <Text style={styles.text}>동의</Text>
    </TouchableOpacity>
  );
};

export default AgreeButton;