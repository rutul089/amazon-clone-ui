//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from 'native-base';
import { BG_COLOR } from './../../utils/Color';


// create a component
class MarketPlace extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="shop" type="Entypo" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>MarketPlace</Text>
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
    backgroundColor: BG_COLOR
  }
});

//make this component available to the app
export default MarketPlace;
