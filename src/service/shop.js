import http from '@common/http';

// 매장목록
export const shopList = () => {
  return http.post('/shop/list', {});
}
