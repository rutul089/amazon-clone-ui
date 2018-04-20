//import liraries
import React, { Component } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import {
  Container,
  Content,
  Root,
  Text,
  Item,
  Button,
  Input
} from "native-base";

import {
  OFFICIAL_BLUE,
  OFF_WHITE,
  LIGHT_TEXT,
  SECONDARY_BLUE
} from "./../../utils/Color";
import { empty } from "../../utils/HelperMethods";
// create a component

var radio_props = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" }
];

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      surname: "",
      username: "",
      password: ""
    };
  }

  _register = () => {
    var _username = this.state.username;
    var _firstname = this.state.firstname;
    var _surname = this.state.surname;
    var _password = this.state.password;
    var _sex = this.state.text;
    if (empty(_username && _firstname && _surname && _password)) {
      this.props.navigation.navigate("MainScreen");
    } else {
      alert("Please enter all values..");
    }
  };

  onSelect(value) {
    this.setState({
      text: `Selected index:value: ${value}`
    });
    console.log(this.state.text);
  }
  render() {
    return (
      <Root>
        <Content>
          <Container style={styles.container}>
            <View
              style={{
                flex: 0.5,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={styles.textStyleHeader}>Sign Up</Text>
              <Text style={styles.textSubtitle}>
                It's free and always will be.
              </Text>
            </View>
            <View
              style={{
                flex: 2,
                paddingLeft: 15,
                paddingRight: 15,
                width: Dimensions.get("window").width,
                borderRadius: 4
              }}
            >
              <Item regular style={{ backgroundColor: OFF_WHITE }}>
                <Input
                  placeholder="First name"
                  style={{ color: LIGHT_TEXT }}
                  placeholderTextColor={LIGHT_TEXT}
                  onChangeText={firstname => this.setState({ firstname })}
                />
              </Item>

              <Item regular style={{ backgroundColor: OFF_WHITE }}>
                <Input
                  placeholder="Surname"
                  style={{ color: LIGHT_TEXT }}
                  placeholderTextColor={LIGHT_TEXT}
                  onChangeText={surname => this.setState({ surname })}
                />
              </Item>

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

              <RadioForm
                radio_props={radio_props}
                style={{ padding: 8 }}
                initial={0}
                labelStyle={[styles.textSubtitle, { padding: 8 }]}
                animation={false}
                labelWrapStyle={{ padding: 5 }}
                buttonColor={OFF_WHITE}
                labelColor={OFF_WHITE}
                selectedButtonColor={OFF_WHITE}
                formHorizontal={true}
                onPress={label => {
                  this.onSelect(label);
                }}
              />

              <Text
                style={[
                  styles.textSubtitle,
                  { marginTop: 15, marginBottom: 15 }
                ]}
              >
                By clicking Sign Up, you agree to our{" "}
                <Text style={{ color: "#627aad", fontWeight: "bold" }}>
                  Terms, Data Policy
                </Text>and Cookie Policy. You may receive SMS notifications from
                us and can opt out at any time.
              </Text>

              <Button
                full
                onPress={this._register}
                style={{ backgroundColor: SECONDARY_BLUE, marginTop: 8 }}
              >
                <Text style={{ color: "#fff", fontSize: 18 }}>Sign Up</Text>
              </Button>
            </View>
          </Container>
        </Content>
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
    fontSize: 30,
    color: OFF_WHITE
  },
  textSubtitle: {
    fontSize: 15,
    color: OFF_WHITE
  },
  textButton: {
    color: OFF_WHITE,
    fontSize: 18
  }
});
//make this component available to the app
export default Register;
