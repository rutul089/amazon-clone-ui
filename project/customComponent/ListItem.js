//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CardItem } from "native-base";

// create a component
class ListItem extends Component {
  render() {
    return (
      <CardItem>
        <Text>{this.props.library.tittle}</Text>
      </CardItem>
    );
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
export default ListItem;
