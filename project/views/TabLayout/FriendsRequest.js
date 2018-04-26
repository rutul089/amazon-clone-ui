//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";
import { OFF_WHITE } from "../../utils/Color";
import UserFeeds from './../../customComponent/UserFeeds';

// create a component
class FriendsRequest extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="people" type="SimpleLineIcons" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
     
     <Text>sadsa</Text>
    
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: OFF_WHITE
  }
});

//make this component available to the app
export default FriendsRequest;
