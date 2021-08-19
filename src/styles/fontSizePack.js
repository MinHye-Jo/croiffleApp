import { Dimensions } from 'react-native';

// 기준 width는 390 으로 고정
const width = Dimensions.get('window').width > 390 ? 390 : Dimensions.get('window').width;

// 높이가 820 보다 낮을경우 2사이즈 더 작게
const height = Dimensions.get('window').height < 820 ? 2 : 0;

export const pt25 = width / (16 + height);
export const pt20 = width / (20 + height);
export const pt18 = width / (22 + height);
export const pt17 = width / (23 + height);
export const pt15 = width / (27 + height);
export const pt13 = width / (30 + height);
export const pt12 = width / (32 + height);
export const pt10 = width / (39 + height);
