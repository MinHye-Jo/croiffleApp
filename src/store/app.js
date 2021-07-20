import { atom, selector } from 'recoil';

// 주문알림 리스트
export const noticeListState = atom({
  key: 'noticeListState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const noticeDataAppend = selector({
  key: 'noticeDataAppend',
  set: ({ get, set }, newValue) => set(noticeListState, get(noticeListState).concat(newValue)),
});
