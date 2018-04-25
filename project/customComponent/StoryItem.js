//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Thumbnail } from "native-base";

// create a component
const StoryItem = ({ uriPath, userName }) => {
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", padding: 8 }}
    >
      <Image
        source={uriPath}
        style={{
          borderWidth: 3,
          borderColor: "#4571C6",
          height: 85,
          width: 85,
          borderRadius: 70
        }}
      />

      <Text style={{ color: "#000" ,marginTop:5}}>
        {userName.length > 10
          ? userName.substring(0, 10 - 3) + "..."
          : userName}
      </Text>
    </View>
  );
};

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
export default StoryItem;
