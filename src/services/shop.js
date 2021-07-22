import http from 'common/http';

// 매장목록
export const shopList = () => {
  return http.post('/shop/list', {});
};

// 매장 상세정보
export const shopDetail = (shopId, xpos, ypos) => {
  return http.post(`/shop/detail/${shopId}`, { shopId, xpos, ypos });
};

// 영업 일시중지
export const suspension = shopId => {
  return http.post(`/shop/set/suspension/${shopId}`, {});
};

// 휴무일 조회
export const getHoliday = shopId => {
  return http.post(`/shop/holiday/${shopId}`, {});
};

// 휴무일 수정
export const setHoliday = data => {
  return http.post('/shop/holiday/save', data);
};

// 공휴일 휴무 등록
export const holidayClose = shopId => {
  return http.post(`/shop/set/holidayClose/${shopId}`, {});
};

// 매장 정보 수정
export const shopEdit = data => {
  return http.postFile('/shop/detail/save', data);
};

// 영업시간 조회
export const shopEnv = shopId => {
  return http.post(`/shop/env/${shopId}`, {});
};

// 영업시간 설정
export const shopEnvEdit = data => {
  return http.post('/shop/env/save', data);
};

// 알림설정
export const notification = shopId => {
  return http.post(`/shop/set/notification/${shopId}`, {});
};
