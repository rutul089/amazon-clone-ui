//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";
import PostFeeds from "./TabLayout/PostFeeds";
import { Icon } from "native-base";
//Creating const for navigation

const AppStackNavigator = StackNavigator({
  //Define the routes and profile screen for navigation
  PostFeeds: {
    screen: PostFeeds
  }
});

// create a component
class MainScreen extends Component {
  render() {
    return <AppStackNavigator />;
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default MainScreen;
