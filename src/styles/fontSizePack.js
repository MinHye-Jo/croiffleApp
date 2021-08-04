import { Dimensions } from 'react-native';

// 기준 width는 390 으로 고정
const width = Dimensions.get('window').width > 390 ? 390 : Dimensions.get('window').width;

export const pt25 = width / 16;
export const pt20 = width / 20;
export const pt18 = width / 22;
export const pt17 = width / 23;
export const pt15 = width / 27;
export const pt12 = width / 32;
export const pt10 = width / 39;
