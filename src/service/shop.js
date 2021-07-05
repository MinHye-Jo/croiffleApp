import http from '@common/http';

// 매장목록
export const shopList = () => {
  return http.post('/shop/list', {});
}

// 매장 상세정보
export const shopDetail = (shopId, xpos, ypos) => {
  return http.post(`/shop/detail/${shopId}`, { shopId, xpos, ypos });
}

// 매장 정보 수정
export const shopEdit = (data) => {
  return http.postFile('/shop/detail/save', data);
}

// 영업 일시중지
export const suspension = (shopId) => {
  return http.post(`/shop/set/suspension/${shopId}`, {});
}

// 알림설정
export const notification = (shopId) => {
  return http.post(`/shop/set/notification/${shopId}`, {});
}