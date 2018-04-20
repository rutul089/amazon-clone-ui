//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SPLASH_BG_COLOR } from "../../utils/Color";
import { Icon } from "native-base";

// create a component
class Splash extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { container, logo, textStyle } = styles;
    return (
      <View style={container}>
        <Icon name="logo-facebook" type="Ionicons" style={logo} />
        <Text style={textStyle}>facebook</Text>
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
    backgroundColor: SPLASH_BG_COLOR
  },
  logo: {
    fontSize: 60,
    color: "#fff"
  },
  textStyle: {
    fontFamily: "FACEBOLF.OTF",
    color: "#fff",
    fontSize: 34,
    fontWeight: "bold"
  }
});

//make this component available to the app
export default Splash;
