import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { Header } from 'react-native-elements';
import styles from 'styles/commonStyle'

// 이전페이지
const renderPrevBtn = (props) => (
  <TouchableOpacity onPress={() => props.navigation.goBack()}>
    <Image
      style={{ width: 25, height: 25, marginLeft: 5, resizeMode: "contain" }}
      source={require('../../../assets/image/icon/icon_prev_w.png')}
    />
  </TouchableOpacity>
);

// 타이틀
const renderCenterTitle = (props) => (

  < TouchableOpacity onPress={() => props.navigation.goBack()}>
    <View style={{ flexDirection: 'row', marginTop: 3 }}>
      <Text style={styles.prevHeaderFont}>{props.title}</Text>
    </View>
  </TouchableOpacity >
);

const PrevHeaderModule = (props) => {
  return (
    <Header
      containerStyle={{ height: 100 }}
      backgroundColor='rgb(0, 191, 213)'
      placement='center'
      leftComponent={renderPrevBtn(props)}
      centerComponent={renderCenterTitle(props)}
    />
  )
};


export default PrevHeaderModule;