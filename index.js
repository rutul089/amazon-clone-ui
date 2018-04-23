import { AppRegistry } from "react-native";
import React, { Component, AsyncStorage, YellowBox } from "react";
import App from "./App";

import MainScreen from "./project/views/MainScreen";
import Splash from "./project/views/Components/Splash";
import Login from "./project/views/Components/Login";
import Register from "./project/views/Components/Register";
console.disableYellowBox = true;


    
class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: "Splash"
    };
    setTimeout(() => {
      console.log("Done some tasks for about 3 seconds");
      this.setState({ currentScreen: "App" });
    }, 3000);
  }

  render() {
    const { currentScreen } = this.state;
    let mainScreen = currentScreen === "Splash" ? <Splash /> : <App />;
    return mainScreen;
  }
}

AppRegistry.registerComponent("amazonclone", () => MainScreen);
