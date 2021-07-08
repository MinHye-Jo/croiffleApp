import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';

import OrderTabButton from '@components/button/OrderTabButton';
import OrderMenuDetail from '@components/button/OrderMenuDetail';

import { orderList } from '@service/order';

// 1:주문요청중, 2:준비중, 3:준비완료, 4:픽업완료, 5:주문거부
const orderCntMap = {
  1: 'reqCnt',
  2: 'preCnt',
  3: 'comCnt',
  4: 'doneCnt',
  5: 'doneCnt'
};

const OrderHistory = (props) => {
  const [status, setStatus] = useState("1");
  const [orderData, setOrderData] = useState(null);
  const [orderCnt, setOrderCnt] = useState({
    reqCnt: 0,
    preCnt: 0,
    comCnt: 0,
    doneCnt: 0
  });

  useEffect(async () => {
    const { data } = await orderList(window.userInfo.shopId, status, "20210706");

    if (data.return_code == 200) {
      console.log(data.response)
      setOrderData(data.response);
      const cntData = {
        reqCnt: 0,
        preCnt: 0,
        comCnt: 0,
        doneCnt: 0
      };

      data.response.forEach(o => cntData[orderCntMap[o.status]]++);

      setOrderCnt(cntData);
    }
  }, [status]);

  const orderTabClick = (val) => {
    setStatus(val);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#fff', padding: 20 }}>
        <OrderTabButton onClick={(v) => orderTabClick(v)} orderCnt={orderCnt} />
      </View>
      <ScrollView style={{ backgroundColor: 'rgb(242, 243, 245)' }}>
        <View style={{ padding: 20 }}>
          {orderData ? orderData.map(o => <OrderMenuDetail key={o.orderId} navigation={props.navigation} data={o} />) : null}
        </View >
      </ScrollView>
    </View >
  );
};

export default OrderHistory;