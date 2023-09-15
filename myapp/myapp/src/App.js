import React, { useEffect } from 'react';
import { View, Text } from "react-native";
// import {PermissionsAndroid} from 'react-native';
// PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
// import messaging from '@react-native-firebase/messaging';
 
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('[Background Remote Message]', remoteMessage);
// });


// 토큰 요청 함수 호출


const App = () => {
    // const getFcmToken = async () => {
    //     const fcmToken = await messaging().getToken();
    //     console.log('[FCM Token] ', fcmToken);
    //   };
     
    //   useEffect(() => {
    //     getFcmToken();
    //     const unsubscribe = messaging().onMessage(async remoteMessage => {
    //       console.log('[Remote Message] ', JSON.stringify(remoteMessage));
    //     });
    //     return unsubscribe;
    //   }, []);
    //useEffect(() => {
    //    getFCMToken();
    //     // 앱이 마운트될 때 Firebase Cloud Messaging 리스너 등록
    //     const unsubscribe = messaging().onMessage(async remoteMessage => {
    //       // 알림 메시지 수신 및 처리
    //       console.log('Received a notification', remoteMessage);
    
    //       // 원하는 작업을 수행하세요. 예: 알림을 표시하거나 데이터를 처리합니다.
    //     });
    
    //     // useEffect 정리 함수에서 리스너를 해제합니다.
    //     return unsubscribe;
    //  }, []);
  return (
    <View><Text>abb</Text></View>
  );
};

export default App;