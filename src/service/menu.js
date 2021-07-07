import http from '@common/http';

// 메뉴 리스트
export const menuList = (shopId) => {
  return http.post('/menu/shop/list', { shopId });
}

// 메뉴 품절
export const menuSoldOut = (data) => {
  return http.post('/menu/soldout', data);
}

// 메뉴 품절 해제
export const menuSale = (data) => {
  return http.post('/menu/soldout/release', data);
}
