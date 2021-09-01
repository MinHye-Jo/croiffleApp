import React from 'react';
import { View } from 'react-native';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { pt18 } from 'styles/fontSizePack';

const AgreeButton = ({ navigation, route, type }) => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      backgroundColor: route.params && route.params.disabled ? 'rgb(174, 174, 174)' : 'rgb(0, 191, 213)',
      borderRadius: 5,
    },
    text: {
      fontFamily: 'S-CoreDream-5Medium',
      fontSize: pt18,
      color: '#fff',
    },
  });

  return (
    <View>
      {route.params && (
        <TouchableOpacity
          style={styles.container}
          disabled={route.params.disabled ? route.params.disabled : false}
          onPress={() => {
            navigation.goBack();
            route.params.onAgree(type);
          }}>
          <Text style={styles.text}>동의</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AgreeButton;
