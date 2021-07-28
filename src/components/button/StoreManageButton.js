import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

const StoreManageButton = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: 5,
      shadowColor: 'grey',
      width: '40%',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginTop: 20,
      marginRight: 20,
      marginBottom: 20,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate('StoreManagement')}>
        <Image
          source={require('../../../assets/image/icon/icon_management.png')}
          style={{ height: '65%', resizeMode: 'contain' }}
        />
        <Text style={{ textAlign: 'center', paddingTop: 10, fontFamily: 'S-CoreDream-5Medium', fontSize: 17 }}>
          매장관리
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StoreManageButton;
