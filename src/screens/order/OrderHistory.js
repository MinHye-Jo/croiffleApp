import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';

import OrderTabButton from 'components/button/OrderTabButton';
import OrderMenuDetail from 'components/button/OrderMenuDetail';

import { orderList, orderCntList } from 'services/order';

// 1:주문요청중, 2:준비중, 3:준비완료, 4:픽업완료, 5:주문거부
const orderCntMap = {
  1: 'reqCnt',
  2: 'preCnt',
  3: 'comCnt',
  4: 'doneCnt',
  5: 'doneCnt',
  6: 'doneCnt',
  7: 'doneCnt',
};

const cntData = {
  reqCnt: 0,
  preCnt: 0,
  comCnt: 0,
  doneCnt: 0,
};

const OrderHistory = props => {
  const [status, setStatus] = useState('1');
  const [orderData, setOrderData] = useState(null);
  const [orderCnt, setOrderCnt] = useState(cntData);

  const reFreshData = async () => {
    // 상태별 주문 카운트 조회
    const cntRe = await orderCntList(window.userInfo.shopId);

    if (cntRe.data && cntRe.data.return_code == 200) {
      let statusTmp = 0;
      const cntTempData = { ...cntData };
      cntRe.data.response.forEach(o => {
        if (o.status == 4 || o.status == 5 || o.status == 6 || o.status == 7) {
          statusTmp += o.count;
          cntTempData[orderCntMap[o.status]] = statusTmp;
        } else {
          cntTempData[orderCntMap[o.status]] = o.count;
        }
      });
      setOrderCnt(cntTempData);
    }

    // 주문 데이터 목록 조회
    const { data } = await orderList(window.userInfo.shopId, status);

    if (data.return_code == 200) {
      setOrderData(data.response);
    }
  };

  useEffect(() => {
    reFreshData();
  }, [status]);

  const orderTabClick = val => {
    setStatus(val);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#fff', padding: 10 }}>
        <OrderTabButton onClick={v => orderTabClick(v)} orderCnt={orderCnt} />
      </View>
      <ScrollView style={{ backgroundColor: 'rgb(242, 243, 245)' }} showsVerticalScrollIndicator={false}>
        <View style={{ padding: 20 }}>
          {orderData
            ? orderData.map(o => (
                <OrderMenuDetail key={o.orderId} navigation={props.navigation} data={o} reFreshData={reFreshData} />
              ))
            : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderHistory;
