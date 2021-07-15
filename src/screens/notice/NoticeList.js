import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import NoticeListDetail from 'components/button/NoticeListDetail';

const NoticeList = ({ navigation }) => {
  const [noticeData, setNoticeData] = useState(window.noticeList || null);

  return (
    <ScrollView style={{ backgroundColor: 'rgb(242, 243, 245)' }}>
      <View>
        <NoticeListDetail navigation={navigation} />
        <NoticeListDetail navigation={navigation} />
        {/* {noticeData ? noticeData.map(o => <NoticeListDetail key={o.orderId} navigation={props.navigation} data={o} />) : null} */}
      </View >
    </ScrollView>
  );
};

export default NoticeList;