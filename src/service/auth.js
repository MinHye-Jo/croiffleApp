import http from '@common/http';

// 로그인
export const login = (id, password, osType) => {
  return http.post('/auth/login', { id, password, osType });
}

// 로그아웃
export const logout = () => {
  return http.get('/logout');
}

// 회원가입
export const join = (data) => {
  return http.post('/auth/signup/employee', data);
}

// 인증번호 발송
export const sendAuthCode = (phoneNumber, id) => {
  return http.post('/auth/sendAuthCode', { phoneNumber, id });
}

// 인증번호 확인
export const confirmAuthCode = (phoneNumber, authCode) => {
  return http.post('/auth/confirmAuthCode/phone', { phoneNumber, authCode });
}

// 아이디 중복확인
export const checkID = (id) => {
  return http.post('/auth/checkID', { id });
}

// 아이디 찾기
export const findId = (name, phoneNumber) => {
  return http.post('/auth/findId', { name, phoneNumber });
}

// 비밀번호 찾기 인증번호 확인
export const confirmAuthCodeSendPwd = (id, phoneNumber, authCode) => {
  return http.post('/auth/confirmAuthCode', { id, phoneNumber, authCode });
}

// 비밀번호 수정
export const modifyPassword = (id, password, passwordNew) => {
  return http.post('/auth/user/modifyPassword', { id, password, passwordNew });
}

// 사용자정보 조회
export const getUserInfo = () => {
  return http.post('/auth/user', {});
}

// 사용자정보 수정
export const modifyUserInfo = () => {
  return http.post('/auth/user/modify', {});
}