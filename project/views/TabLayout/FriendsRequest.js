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
     
      <UserFeeds
      imageUri={require("../../assets/images/3.jpg")}
      name="Domingo Vega"
      hour="4 Hours"
      city="Jerichower land"
      iconName="globe"
      disc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a velit
    quis sapien mattis suscipit. Fusce sed tortor at risus eleifend
    scelerisque sit amet ac turpis. Praesent semper massa at turpis
    lacinia fermentum. Proin consectetur in nunc sit amet venenatis."
      comment="14 Comment"
      senderImage={require("../../assets/images/4.jpg")}
      commentName="Aaron Polat"
      senderComment="sadsadsaodsad"
    />
    
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
