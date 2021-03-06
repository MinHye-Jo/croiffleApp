import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import moment from 'moment';
import styles from 'styles/commonStyle';
import OrderFlow from 'components/image/OrderFlow';
import OrderFlowReject from 'components/image/OrderFlowReject';
import OrderFlowCancel from 'components/image/OrderFlowCancel';
import DefaultModal from 'components/modal/DefaultModal';
import DefaultActionModal from 'components/modal/DefaultActionModal';
import OrderRejectModal from 'components/modal/OrderRejectModal';
import OrderCompleteModal from 'components/modal/OrderCompleteModal';

import { orderDetail, orderReceipt, orderReject, orderReady, orderComplete, orderCancel } from 'services/order';

// 1.업소사정으로 취소 / 2.재료소진 / 3.요청사항 불가
const rejectType = {
  cancel: '1',
  material: '2',
  request: '3',
};

const OrderDetail = ({ navigation, route }) => {
  const shopId = window.userInfo.shopId;
  const orderId = route.params.orderId;
  const [orderData, setOrderData] = useState({
    status: '0',
    price: 0,
    pickupHour: '00',
    pickupMinute: '00',
    orderRequest: '',
    userName: '',
    mobile: '',
    orderDetail: [],
  });

  // 모달 데이터
  const [rejectDate, setRejectDate] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const [rejectModalOpen, setRejectModalOpen] = useState(false);
  const [completeModalOpen, setCompleteModalOpen] = useState(false);
  const [actModalOpen, setActModalOpen] = useState(false);
  const [actModalText, setActModalText] = useState('');

  useEffect(async () => {
    const { data } = await orderDetail(orderId);

    if (data.return_code == 200) {
      const re = data.response;
      re.price = priceCn(re.price);
      re.rejectedAt ? setRejectDate(moment(re.rejectedAt).format('YYYY-MM-DD hh:mm')) : setRejectDate('');
      re.orderDate = re.orderDate.replace(/([0-9]{4})([0-9]{2})([0-9]{2})/g, '$1.$2.$3');
      setOrderData({ ...orderData, ...re });
    }
  }, []);

  // 가격 치환
  const priceCn = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // 주문 접수 API
  const orderReceiptApi = async () => {
    const { data } = await orderReceipt(orderId, shopId);

    if (data.return_code == 200) {
      setActModalOpen(true);
      setActModalText('주문이 접수되었습니다.');
    } else {
      setModalOpen(true);
      setModalText(data.return_message);
    }
  };

  // 주문 취소 API
  const orderCancelApi = async () => {
    const { data } = await orderCancel(orderId, shopId);

    if (data.return_code == 200) {
      setActModalOpen(true);
      setActModalText('주문이 취소되었습니다.');
    } else {
      setModalOpen(true);
      setModalText(data.return_message);
    }
  };

  // 주문 거부 API
  const orderRejectApi = async rejectData => {
    setRejectModalOpen(false);

    // 주문 거절 사유
    let reject;
    for (let key in rejectData.rejectRadio) {
      if (rejectData.rejectRadio[key] == true) {
        reject = rejectType[key];
        break;
      }
    }

    // 품절 메뉴 리스트
    let rejectMenu = [];
    for (let key in rejectData.rejectMenu) {
      if (rejectData.rejectMenu[key] == true) {
        rejectMenu.push(Number(key));
      }
    }

    const bodyData = {
      shopId: shopId,
      rejectType: reject,
      rejectReason: rejectData.rejectReason,
      soldoutMenuIdList: rejectMenu,
    };

    const { data } = await orderReject(orderId, bodyData);

    if (data.return_code == 200) {
      moveBackPage();
    }
  };

  // 주문 준비완료 API
  const orderReadyApi = async () => {
    const { data } = await orderReady(orderId, window.userInfo.shopId);

    if (data.return_code == 200) {
      setActModalOpen(true);
      setActModalText('알림이 전송되었습니다.');
    } else {
      setModalOpen(true);
      setModalText(data.return_message);
    }
  };

  // 주문 픽업완료 API
  const orderCompleteApi = async orderUniqueness => {
    setCompleteModalOpen(false);

    const { data } =
      orderData.status == 2
        ? await orderReady(orderId, window.userInfo.shopId)
        : await orderComplete(orderId, shopId, orderUniqueness);

    if (data.return_code == 200) {
      moveBackPage();
    }
  };

  // 이전 화면 이동
  const moveBackPage = () => {
    navigation.goBack();
    route.params.emit('refresh');
  };

  return (
    <View style={styles.topContainer}>
      {/* 주문거부 */}
      <OrderRejectModal
        menuData={orderData.orderDetail}
        modalOpen={rejectModalOpen}
        onClose={() => setRejectModalOpen(false)}
        onAction={data => orderRejectApi(data)}
      />

      {/* 완료처리 */}
      <OrderCompleteModal
        menuData={orderData.orderDetail}
        modalOpen={completeModalOpen}
        onClose={() => setCompleteModalOpen(false)}
        onAction={data => orderCompleteApi(data)}
      />

      <DefaultModal modalOpen={modalOpen} onClose={() => setModalOpen(false)} modalText={modalText} />

      <DefaultActionModal
        modalOpen={actModalOpen}
        onClose={() => setActModalOpen(false)}
        onAction={() => moveBackPage()}
        modalText={actModalText}
      />

      {orderData.status == '5' ? (
        <View style={{ backgroundColor: '#fff', padding: 20, height: 130 }}>
          <OrderFlowReject />
        </View>
      ) : orderData.status == '6' || orderData.status == '7' ? (
        <View style={{ backgroundColor: '#fff', padding: 20, height: 130 }}>
          <OrderFlowCancel />
        </View>
      ) : (
        <View style={{ backgroundColor: '#fff', padding: 20, height: 100 }}>
          <OrderFlow orderStatus={orderData.status} />
        </View>
      )}

      <View style={styles.hr} />
      <ScrollView
        style={{ backgroundColor: '#fff', paddingLeft: 20, paddingRight: 20 }}
        showsVerticalScrollIndicator={false}>
        {orderData.status == '5' && (
          <View>
            <Text style={{ ...styles.font5M15, marginBottom: 10 }}>거부일시</Text>
            <View style={styles.greyTxtBox}>
              <Text style={styles.font4R15}>{rejectDate}</Text>
            </View>
            <Text style={{ ...styles.font5M15, marginBottom: 10, marginTop: 20 }}>거부사유</Text>
            <View style={{ ...styles.greyTxtBox, marginBottom: 20 }}>
              <Text style={styles.font4R15}>{orderData.rejectedReason}</Text>
            </View>
          </View>
        )}
        {(orderData.status == '6' || orderData.status == '7') && (
          <View>
            <Text style={{ ...styles.font5M15, marginBottom: 10 }}>취소일시</Text>
            <View style={styles.greyTxtBox}>
              <Text style={styles.font4R15}>{rejectDate}</Text>
            </View>
            <View style={{ ...styles.hr, marginTop: 20 }} />
          </View>
        )}
        {(orderData.status == '4' || orderData.status == '5') && (
          <View>
            <Text style={{ ...styles.font5M15, marginBottom: 10 }}>특이사항</Text>
            <View style={styles.greyTxtBox}>
              <Text style={styles.font4R15}>{orderData.orderUniqueness}</Text>
            </View>
            <View style={{ ...styles.hr, marginTop: 20 }} />
          </View>
        )}

        <Text style={{ ...styles.font5M15, marginBottom: 10 }}>주문일시</Text>
        <View style={styles.greyTxtBox}>
          <Text style={styles.font4R15}>{orderData.orderDate}</Text>
        </View>

        <Text style={{ ...styles.font5M15, marginBottom: 10, marginTop: 20 }}>주문내역</Text>
        <View style={{ ...styles.greyBox, padding: 10, paddingTop: 0 }}>
          {orderData.orderDetail.map((o, index) => {
            return (
              <View key={index}>
                <View style={{ ...styles.row, paddingTop: 10, flex: 1 }}>
                  <Text style={{ ...styles.font4R15, flex: 3 }}>{o.menuName}</Text>
                  <Text style={{ ...styles.font4R15, flex: 1 }}>{o.unitCount}</Text>
                  <View style={{ ...styles.font4R15, flex: 1, alignItems: 'flex-end' }}>
                    <Text style={styles.font4R15}>{priceCn(o.price)}원</Text>
                  </View>
                </View>
                {o.optionList.map((e, idx) => {
                  return (
                    <View style={{ ...styles.row, paddingTop: 10 }} key={idx}>
                      <Text style={{ ...styles.font4R15, flex: 3 }}>+ {e.menuName}</Text>
                      <Text style={{ ...styles.font4R15, flex: 1 }}>{e.unitCount} </Text>
                      <View style={{ ...styles.font4R15, flex: 1, alignItems: 'flex-end' }}>
                        <Text style={styles.font4R15}>{priceCn(e.unitPrice)}원</Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            );
          })}
          <View style={{ ...styles.hr, marginTop: 10, marginBottom: 10, marginLeft: 5, marginRight: 5 }} />

          <View style={{ ...styles.row, justifyContent: 'space-between' }}>
            <Text style={styles.font5M15}>총 주문금액</Text>
            <Text style={styles.font5M15blue}>{orderData.price}원</Text>
          </View>
        </View>

        <Text style={{ ...styles.font5M15, marginBottom: 10, marginTop: 20 }}>픽업시간</Text>
        <View style={styles.greyTxtBox}>
          <View style={styles.row}>
            <Text style={styles.font5M15blue}>{orderData.pickupHour}</Text>
            <Text style={styles.font5M15}> 시 </Text>
            <Text style={styles.font5M15blue}>{orderData.pickupMinute}</Text>
            <Text style={styles.font5M15}> 분 </Text>
          </View>
        </View>

        <Text style={{ ...styles.font5M15, marginBottom: 10, marginTop: 20 }}>결제방법</Text>
        <View style={styles.greyTxtBox}>
          <Text style={styles.font4R15}>현장결제</Text>
        </View>

        <Text style={{ ...styles.font5M15, marginBottom: 10, marginTop: 20 }}>주문 시 요청사항</Text>
        <View style={{ ...styles.greyTxtBox, minHeight: 40, height: 'auto' }}>
          <Text style={styles.font4R15}>{orderData.orderRequest}</Text>
        </View>

        <Text style={{ ...styles.font5M15, marginBottom: 10, marginTop: 20 }}>고객연락처</Text>
        <View style={{ ...styles.greyBox, padding: 10 }}>
          <View style={{ ...styles.row }}>
            <Text style={{ ...styles.font4R15, width: '30%' }}>성함</Text>
            <Text style={{ ...styles.font4R15 }}>{orderData.userName}</Text>
          </View>
          <View style={{ ...styles.row, paddingTop: 10 }}>
            <Text style={{ ...styles.font4R15, width: '30%' }}>전화번호</Text>
            <Text style={{ ...styles.font4R15 }}>{orderData.mobile}</Text>
          </View>
        </View>
        {orderData.status == '1' && (
          <View>
            <View style={{ ...styles.row, marginTop: 20 }}>
              <TouchableOpacity
                style={{ ...styles.redBtn, flex: 1, marginRight: 5 }}
                onPress={() => setRejectModalOpen(true)}>
                <View>
                  <Text style={styles.btnTxtWhite}>주문 거부</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ ...styles.blueBtn, flex: 1, marginLeft: 5 }} onPress={orderReceiptApi}>
                <Text style={styles.btnTxtWhite}>주문 접수</Text>
              </TouchableOpacity>
            </View>
            <View style={{ ...styles.row, marginTop: 5, marginBottom: 30 }}>
              <TouchableOpacity style={{ ...styles.whiteBtn, flex: 1 }} onPress={() => setCompleteModalOpen(true)}>
                <Text style={styles.btnTxtBlue}>완료처리</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {orderData.status == '2' && (
          <View>
            <View style={{ ...styles.row, marginTop: 20 }}>
              <TouchableOpacity style={{ ...styles.redBtn, flex: 1, marginRight: 5 }} onPress={orderReadyApi}>
                <View>
                  <Text style={styles.btnTxtWhite}>준비완료 알림전송</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ ...styles.row, marginTop: 5, marginBottom: 30 }}>
              <TouchableOpacity
                style={{ ...styles.whiteBtn, flex: 1, alignItems: 'flex-end', marginRight: 10 }}
                onPress={() => setCompleteModalOpen(true)}>
                <Text style={styles.btnTxtBlue}>완료처리</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ ...styles.whiteBtn, flex: 1, alignItems: 'flex-start', marginLeft: 10 }}
                onPress={orderCancelApi}>
                <Text style={styles.btnTxtGrey}>주문취소</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {orderData.status == '3' && (
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              style={{ ...styles.blueBtn, flex: 1, marginLeft: 5 }}
              onPress={() => setCompleteModalOpen(true)}>
              <Text style={styles.btnTxtWhite}>완료처리</Text>
            </TouchableOpacity>
            <View style={{ ...styles.row, marginTop: 5, marginBottom: 30 }}>
              <TouchableOpacity style={{ ...styles.whiteBtn, flex: 1 }} onPress={orderCancelApi}>
                <Text style={styles.btnTxtGrey}>주문취소</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {(orderData.status == '4' || orderData.status == '5' || orderData.status == '6' || orderData.status == '7') && (
          <View style={{ marginTop: 20, marginBottom: 30 }} />
        )}
      </ScrollView>
    </View>
  );
};

export default OrderDetail;
