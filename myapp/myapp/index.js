/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import messaging from '@react-native-firebase/messaging';

// // Firebase 초기화
// messaging()
//   .getToken()
//   .then(token => {
//     console.log('FCM Token:', token);
//   });
// import messaging from '@react-native-firebase/messaging';

// messaging().setBackgroundMessageHandler(async remoteMessage => {
//     console.log('Message handled in the background!', remoteMessage);
//   });
// initializeApp();
AppRegistry.registerComponent(appName, () => App);
