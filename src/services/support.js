import http from 'common/http';

// 고객지원 요청 등록
export const supportSave = (data) => {
  return http.post('/support/save', data);
}
