//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";
import { OFF_WHITE } from "../../utils/Color";

// create a component
class MyProfile extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>MyProfile</Text>
      </View>
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
export default MyProfile;
