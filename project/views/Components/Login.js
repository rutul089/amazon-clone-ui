//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Button,
  Toast,
  Root
} from "native-base";
import {
  OFFICIAL_BLUE,
  OFF_WHITE,
  LIGHT_TEXT,
  SECONDARY_BLUE
} from "./../../utils/Color";

import { LOGIN_KEY } from './../../utils/Keys';
import {
  checkForNumber,
  checkForValidEmail,
  checkForValidString,
  empty,
  customLog
} from "./../../utils/HelperMethods";

// create a component
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  //Click events..
  login = () => {
    var _username = this.state.username;
    var _password = this.state.password;
    customLog(_username + _password);

    if (empty(_username)) {
      if (checkForValidEmail(_username)) {
        if (empty(_password)) {
          if (_username == "admin@admin.com" && _password == "1234") {
            AsyncStorage.setItem(LOGIN_KEY,"true"); // To store flag to check that user is login or not 
            this.props.navigation.navigate("MainScreen");
          } else {
            Toast.show({
              text: "Wrong password or email! "
            });
          }
        } else {
          Toast.show({
            text: "Please enter password"
          });
        }
      } else {
        if (checkForNumber(_username)) {
          if (empty(_password)) {
            if (_username == "123456789" && _password == "1234") {
              AsyncStorage.setItem(LOGIN_KEY,"true");
              this.props.navigation.navigate("MainScreen");
            } else {
              Toast.show({
                text: "Wrong password or email! "
              });
            }
          } else {
            Toast.show({
              text: "Please enter password"
            });
          }
        } else {
          Toast.show({
            text: "Please enter valid email or phone number"
          });
        }
      }
    } else {
      Toast.show({
        text: "Please enter valid email or phone number"
      });
    }
  };

  _loadInitialState = async () => {
    AsyncStorage.getItem(LOGIN_KEY).then(item => {
      if (item) {
        this.props.navigation.navigate("MainScreen");
      }
    });
  };

  componentDidMount() {
    this._loadInitialState().done();
  }



  registerActivity = () => {
    this.props.navigation.navigate("Register");
  };

  render() {
    return (
      <Root>
        <Container style={styles.container}>
          <Content style={styles.contentStyle}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: Dimensions.get("window").height / 4.5,
                marginBottom: 20
              }}
            >
              <Text style={styles.textStyleHeader}>facebook</Text>
            </View>
            <View
              style={{
                flex: 2,
                marginLeft: 15,
                marginRight: 15,
                borderRadius: 4,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Item regular style={{ backgroundColor: OFF_WHITE }}>
                <Input
                  placeholder="Email or phone number"
                  style={{ color: LIGHT_TEXT }}
                  placeholderTextColor={LIGHT_TEXT}
                  onChangeText={username => this.setState({ username })}
                />
              </Item>
              <Item regular style={{ backgroundColor: OFF_WHITE }}>
                <Input
                  secureTextEntry={true}
                  placeholder="Password"
                  style={{ color: LIGHT_TEXT }}
                  placeholderTextColor={LIGHT_TEXT}
                  onChangeText={password => this.setState({ password })}
                />
              </Item>
              <Button
                full
                onPress={this.login}
                style={{ backgroundColor: SECONDARY_BLUE, marginTop: 8 }}
              >
                <Text style={{ color: "#fff", fontSize: 18 }}>Log In</Text>
              </Button>
            </View>
            <View
              style={{
                flex: 2,
                marginLeft: 15,
                flexDirection: "column",

                marginRight: 15,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity onPress={this.registerActivity}>
                <Text style={styles.textButton}>Sign Up for Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={[styles.textButton, { marginTop: 20 }]}>
                  Need Help ?
                </Text>
              </TouchableOpacity>
            </View>
          </Content>
        </Container>
      </Root>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: OFFICIAL_BLUE
  },
  contentStyle: {
    flex: 1,
    width: Dimensions.get("window").width
  },
  textStyleHeader: {
    fontFamily: "FACEBOLF.OTF",
    padding: 8,
    fontWeight: "bold",
    fontSize: 50,
    color: OFF_WHITE
  },
  textButton: {
    color: OFF_WHITE,
    fontSize: 18,
    marginTop: 80
  }
});

//make this component available to the app
export default Login;
