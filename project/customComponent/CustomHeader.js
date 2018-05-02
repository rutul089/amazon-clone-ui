import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HEADER_BLUE_IOS } from './../utils/Color';

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
    backgroundColor: HEADER_BLUE_IOS,
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
  },
  textStyle: {
    fontSize: 22,
    color:"#f2f2f2",
    fontWeight: '400',
  }
});

export default CustomHeader;
