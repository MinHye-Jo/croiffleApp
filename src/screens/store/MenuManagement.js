import DefaultActionModal from 'components/modal/DefaultActionModal';
import SaleSoldoutSwitch from 'components/switch/SaleSoldoutSwitch';
import { menuList, menuSale, menuSoldOut } from 'services/menu';
import styles from 'styles/commonStyle';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

let bodyData = null;

const MenuManagement = ({ route }) => {
  const shopId = route.params.shopId;
  const [menuData, setMenuData] = useState(null);

  // 모달 데이터
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');
  const [modalTextSec, setModalTextSec] = useState('');

  useEffect(async () => {
    const { data } = await menuList(shopId);
    if (data.return_code == 200) {
      setMenuData(data.response);
    }
  }, []);

  const setMenuSoldOut = (type, data) => {
    bodyData = data;

    if (type == 'sold') {
      setModalOpen(true);
      setModalTitle('품절처리');
      setModalText('품절처리 하시겠습니까?');
      setModalTextSec('다음 날 오픈 전까지 품절처리됩니다.');
    } else {
      menuSoldOutApi('sale');
    }
  };

  const menuSoldOutApi = async type => {
    setModalOpen(false);
    if (type == 'sale') {
      const { data } = await menuSale(bodyData);

      if (data.return_code == 200) {
        setMenuData(
          menuData.map(o => {
            if (o.menuId == bodyData.menuId) {
              o.soldout = '0';
            }
            return o;
          }),
        );
      }
    } else {
      const { data } = await menuSoldOut(bodyData);

      if (data.return_code == 200) {
        setMenuData(
          menuData.map(o => {
            if (o.menuId == bodyData.menuId) {
              o.soldout = '1';
            }
            return o;
          }),
        );
      }
    }
  };

  return (
    <ScrollView style={styles.topContainer}>
      <DefaultActionModal
        modalOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onAction={() => menuSoldOutApi('')}
        title={modalTitle}
        modalText={modalText}
        modalTextSec={modalTextSec}
      />

      <View style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 30 }}>
        <Text style={{ ...styles.font5M15, marginTop: 40 }}> 크로플 </Text>
        {menuData
          ? menuData.map((e, idx) => {
              if (e.parentId == 1) {
                return (
                  <View key={idx} style={{ ...styles.storeGreyBox, marginTop: 10 }}>
                    <View style={styles.rowFlex2Left}>
                      <Text style={styles.font5M15}> {e.menuName} </Text>
                    </View>
                    <SaleSoldoutSwitch
                      onClick={(type, v) => setMenuSoldOut(type, v)}
                      data={{ menuId: e.menuId, parentId: e.parentId, shopId: shopId }}
                      flagVal={e.soldout}
                    />
                  </View>
                );
              }
            })
          : null}

        <Text style={{ ...styles.font5M15, marginTop: 30 }}> 크로플 옵션</Text>
        {menuData
          ? menuData.map((e, idx) => {
              if (e.parentId == 14) {
                return (
                  <View key={idx} style={{ ...styles.storeGreyBox, marginTop: 10 }}>
                    <View style={styles.rowFlex2Left}>
                      <Text style={styles.font5M15}> {e.menuName} </Text>
                    </View>
                    <SaleSoldoutSwitch
                      onClick={(type, v) => setMenuSoldOut(type, v)}
                      data={{ menuId: e.menuId, parentId: e.parentId, shopId: shopId }}
                      flagVal={e.soldout}
                    />
                  </View>
                );
              }
            })
          : null}

        <Text style={{ ...styles.font5M15, marginTop: 30 }}> 세트메뉴 </Text>
        {menuData
          ? menuData.map((e, idx) => {
              if (e.parentId == 2) {
                return (
                  <View key={idx} style={{ ...styles.storeGreyBox, marginTop: 10 }}>
                    <View style={styles.rowFlex2Left}>
                      <Text style={styles.font5M15}> {e.menuName} </Text>
                    </View>
                    <SaleSoldoutSwitch
                      onClick={(type, v) => setMenuSoldOut(type, v)}
                      data={{ menuId: e.menuId, parentId: e.parentId, shopId: shopId }}
                      flagVal={e.soldout}
                    />
                  </View>
                );
              }
            })
          : null}

        <Text style={{ ...styles.font5M15, marginTop: 30 }}> 음료 </Text>
        {menuData
          ? menuData.map((e, idx) => {
              if (e.parentId == 3) {
                return (
                  <View key={idx} style={{ ...styles.storeGreyBox, marginTop: 10 }}>
                    <View style={styles.rowFlex2Left}>
                      <Text style={styles.font5M15}> {e.menuName} </Text>
                    </View>
                    <SaleSoldoutSwitch
                      onClick={(type, v) => setMenuSoldOut(type, v)}
                      data={{ menuId: e.menuId, parentId: e.parentId, shopId: shopId }}
                      flagVal={e.soldout}
                    />
                  </View>
                );
              }
            })
          : null}
      </View>
    </ScrollView>
  );
};

export default MenuManagement;
