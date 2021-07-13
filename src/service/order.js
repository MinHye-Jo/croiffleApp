import http from '@common/http';

// 주문 목록
export const orderList = (shopId, status, orderDate) => {
  return http.post('/order/employee/list', { shopId, status, orderDate });
}

// 주문 상세
export const orderDetail = (orderId) => {
  return http.post(`/order/${orderId}`, {});
}

// 주문 접수
export const orderReceipt = (orderId, shopId) => {
  return http.post(`/order/receipt/${orderId}`, { shopId });
}

// 주문 거부
export const orderReject = (orderId, data) => {
  return http.post(`/order/reject/${orderId}`, data);
}
