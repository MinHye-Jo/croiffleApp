import http from '@common/http';

// 매장목록
export const shopList = () => {
  return http.post('/shop/list', {});
}

// 영업 일시중지
export const suspension = (shopId) => {
  return http.post(`/shop/set/suspension/${shopId}`, {});
}

// 알림설정
export const notification = (shopId) => {
  return http.post(`/shop/set/notification/${shopId}`, {});
}