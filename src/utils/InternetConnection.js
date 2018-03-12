import {
    Platform,
    StyleSheet,
    Text,
    View,
    NetInfo
  } from 'react-native';
 
export function  HelloIrshad() {
   
    NetInfo.isConnected.fetch().then(isConnected => {
        // console.log('First, is ' + (isConnected ?isConnection='online' : 'offline'));
      });
      function handleFirstConnectivityChange(isConnected) {
        console.log(isConnected)
        // console.log('Then, is ' + (isConnected ? isConnection='online' : 'offline'));
        NetInfo.isConnected.removeEventListener(
          'connectionChange',
          handleFirstConnectivityChange
        );
      }
      NetInfo.isConnected.addEventListener(
        'connectionChange',
        handleFirstConnectivityChange
      );
 
}