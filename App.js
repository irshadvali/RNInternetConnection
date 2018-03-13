/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NetInfo,
  TouchableOpacity,
  Alert
} from "react-native";
import { isInternetConnected } from "./src/utils/InternetConnection";

export default class App extends Component<> {
  constructor() {
    super();

    this.state = {
      isConnected: true,

    };
  }

  CheckInternet = () => {
    isInternetConnected(this.goToCheckInternet).then(() => {
      if (this.state.isConnected) {
        alert("connected");
      } else {
        alert("offline");
      }
    });
  };

  goToCheckInternet = isConnected => {
    this.setState({ isConnected });
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.CheckInternet()}>
          <Text style={styles.welcome}>Welcome to React Native Android !</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
