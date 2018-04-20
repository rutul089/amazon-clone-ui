/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import Login from "./project/views/Components/Login";
import Register from "./project/views/Components/Register";
import MainScreen from "./project/views/MainScreen";

//Creating const for navigation
const AppNavigator = StackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register },
    MainScreen: { screen: MainScreen }
  },
  {
    navigationOptions: {
      initialRouteName:"Login",
      header: false
    }
  }
);

export default class App extends Component {
  render() {
    return <AppNavigator />;
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
