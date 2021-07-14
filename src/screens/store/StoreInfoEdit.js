import React, { useState, useEffect } from 'react';

import { ScrollView, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

import styles from 'styles/commonStyle';
import FindPostCode from 'components/modal/FindPostCode';
import DefaultModal from 'components/modal/DefaultModal';

import { shopDetail, shopEdit } from 'services/shop';

const StoreInfoEdit = ({ route }) => {
  // 매장 데이터
  const [shopInfo, setShopInfo] = useState({
    shopId: route.params.shopId,
    shopName: '',
    file: null,
    addressRoad: '',
    addressDetail: '',
    postalCode: '',
    phone: ''
  });

  const [fileName, setFileName] = useState('')

  // 모달 데이터
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');

  useEffect(async () => {
    const { data } = await shopDetail(route.params.shopId, 0, 0);

    if (data.return_code == 200) {
      setShopInfo({
        ...(Object.keys(shopInfo).reduce((obj, key) => {
          if (key == "file") setFileName(data.response.shopImgUrl);
          else obj[key] = data.response[key];
          return obj;
        }, {}))
      });
    } else {
      setModalOpen(true);
      setModalText(data.return_message)
    }
  }, []);

  // 입력 데이터 셋
  const updateInput = (key, value) => {
    if (key == "address") {
      setShopInfo({
        ...shopInfo,
        addressRoad: value.address,
        postalCode: value.zonecode
      })

      // 우편번호 검색 모달 닫기
      setPostModalOpen(false);
    } else {
      setShopInfo({
        ...shopInfo,
        [key]: value
      })
    }
  }

  // 이미지 파일 업로드
  const selectImage = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, (response) => {
      if (response.error) {
        setModalOpen(true);
        setModalText("이미지 업로드에 실패하였습니다.");
      } else {
        const resData = response.assets[0];
        setFileName(resData.fileName);
        updateInput('file', {
          name: resData.fileName,
          type: resData.type,
          uri: Platform.OS === 'ios' ? resData.uri.replace('file://', '') : resData.uri
        })
      }
    });
  }

  // 매장 정보 수정 api
  const shopEditApi = async () => {
    const { data } = await shopEdit(shopInfo);
    if (data.return_code == 200) {
      setModalOpen(true);
      setModalTitle("매장정보 수정");
      setModalText("저장 되었습니다.")
    } else {
      setModalOpen(true);
      setModalTitle("매장정보 수정실패");
      setModalText(data.return_message)
    }
  }

  return (
    <ScrollView style={styles.topContainer}>

      <DefaultModal modalOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalTitle} modalText={modalText} />

      <FindPostCode modalOpen={postModalOpen}
        onClose={() => setPostModalOpen(false)}
        onSelect={(data) => updateInput('address', data)} />

      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 매장명 </Text>
        <TextInput style={{ ...styles.greyInput }} value={shopInfo.shopName}
          onChangeText={e => updateInput('shopName', e)} />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 매장 사진등록 </Text>
        <View style={styles.row}>
          <TextInput style={{ ...styles.greyInput, flex: 1.5 }}
            placeholder="파일을 첨부해주세요"
            placeholderTextColor="rgb(174, 174, 174)"
            value={fileName}
          />
          <TouchableOpacity style={{ ...styles.blueBtn, flex: 1, marginLeft: 10 }} onPress={selectImage}>
            <Text style={styles.btnTxtWhite}>사진 등록</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 매장주소 </Text>
        <View style={styles.row}>
          <TextInput style={{ ...styles.greyInput, flex: 1.5 }} editable={false} value={shopInfo.postalCode} />
          <TouchableOpacity style={{ ...styles.blueBtn, flex: 1, marginLeft: 10 }} onPress={() => setPostModalOpen(true)}>
            <Text style={styles.btnTxtWhite}>우편번호 검색</Text>
          </TouchableOpacity>
        </View>
        <TextInput style={{ ...styles.greyInput, marginTop: 10 }} editable={false} value={shopInfo.addressRoad} />
        <TextInput style={{ ...styles.greyInput, marginTop: 10 }} value={shopInfo.addressDetail} onChangeText={e => updateInput('addressDetail', e)} />

        <Text style={{ ...styles.font5M15, marginTop: 30, marginBottom: 10 }}> 매장 전화번호 </Text>
        <TextInput style={{ ...styles.greyInput }} value={shopInfo.phone} onChangeText={e => updateInput('phone', e)} />

        <TouchableOpacity onPress={() => shopEditApi()}>
          <View style={{ ...styles.blueBtn, marginTop: 30, marginBottom: 40 }}>
            <Text style={styles.btnTxtWhite}>저장</Text>
          </View>
        </TouchableOpacity>
      </View >
    </ScrollView>
  );
};

export default StoreInfoEdit;