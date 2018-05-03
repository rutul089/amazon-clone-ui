//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../Redux/reducer";
import { Header, Container, Body, Left, Right, Title } from "native-base";
import { HEADER_BLUE } from "../../utils/Color";
import CustomHeader from "./../../customComponent/CustomHeader";
import { BG_COLOR } from "./../../utils/Color";
import LibraryList from "./LibraryList";
// create a component
const ReduxApp = () => {
  return (
    <Provider store={createStore(reducers)}>
      <Container style={{ flex: 1, backgroundColor: "#fff" }}>
        <CustomHeader headerText="Header" />
        {/*asd*/}
        <LibraryList />
      </Container>
    </Provider>
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
export default ReduxApp;
