import {
  Platform,
  NetInfo
} from "react-native";

export async function isInternetConnected(cb) {
  if (Platform.OS === "ios") {
    function handleFirstConnectivityChange(isConnected) {
      cb(isConnected);
    }
    await NetInfo.isConnected.fetch().then().done(isConnected => {
      NetInfo.isConnected.addEventListener(
        "connectionChange",
        handleFirstConnectivityChange
      );
      console.log(isConnected);
    });

  } 
  else {
    await NetInfo.isConnected.fetch().then(isConnected => {
      cb(isConnected);
    });

  }


}