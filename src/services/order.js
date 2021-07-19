import http from 'common/http';

// 주문 목록
export const orderList = (shopId, status, orderDate) => {
  return http.post('/order/employee/list', { shopId, status, orderDate });
};

// 주문 상태별 카운트
export const orderCntList = (shopId, orderDate) => {
  return http.post('/order/status/count', { shopId, orderDate });
};

// 주문 상세
export const orderDetail = orderId => {
  return http.post(`/order/${orderId}`, {});
};

// 주문 접수
export const orderReceipt = (orderId, shopId) => {
  return http.post(`/order/receipt/${orderId}`, { shopId });
};

// 주문 거부
export const orderReject = (orderId, data) => {
  return http.post(`/order/reject/${orderId}`, data);
};

// 주문 준비완료
export const orderReady = (orderId, shopId) => {
  return http.post(`/order/ready/${orderId}`, { shopId });
};

// 주문 픽업완료
export const orderComplete = (orderId, shopId, orderUniqueness) => {
  return http.post(`/order/complete/${orderId}`, { shopId, orderUniqueness });
};
