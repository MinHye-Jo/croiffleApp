import http from '@common/http';


export const login = (id, password) => {
  return http.post('/auth/login', { id, password });
}

export const logout = () => {
  return http.get('/logout');
}