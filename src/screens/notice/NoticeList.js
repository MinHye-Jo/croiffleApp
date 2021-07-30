import React from 'react';
import { View, ScrollView } from 'react-native';
import NoticeListDetail from 'components/button/NoticeListDetail';
import { useRecoilValue } from 'recoil';
import { noticeListState } from 'store/app';

const NoticeList = ({ navigation }) => {
  const noticeData = useRecoilValue(noticeListState);

  return (
    <ScrollView style={{ backgroundColor: 'rgb(242, 243, 245)' }}>
      <View>
        {noticeData.length
          ? noticeData
              .slice(0)
              .reverse()
              .map(o => <NoticeListDetail key={o.orderId} navigation={navigation} data={o} />)
          : null}
      </View>
    </ScrollView>
  );
};

export default NoticeList;
