import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomHeader = props => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
  },
  textStyle: {
    fontSize: 20
  }
});

export default CustomHeader;
