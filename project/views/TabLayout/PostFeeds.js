//import liraries
import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body
} from "native-base";
import { OFF_WHITE } from "../../utils/Color";
import Path from './../../assets/images/ios-image/path';
Path

// create a component
class PostFeeds extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={require('./../../assets/images/1.jpg')} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={require('./../../assets/images/feed1.jpg')}
                  style={{ height: 200, flex: 1 ,resizeMode:'cover'}}
                />
                <Text>//Your text here</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon active name="thumbs-up" />
                  <Text>1,926 </Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={require('./../../assets/images/3.jpg')} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={require('./../../assets/images/feed3.png')}
                  style={{ height: 200,resizeMode:'cover', flex: 1 }}
                />
                <Text>//Your text here</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon active name="thumbs-up" />
                  <Text>1,926 </Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={require('./../../assets/images/2.jpg')} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={require('./../../assets/images/feed2.jpg')}
                  style={{ height: 200, resizeMode:'cover', flex: 1 }}
                />
                <Text>//Your text here</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon active name="thumbs-up" />
                  <Text>1,926 </Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: OFF_WHITE
  }
});

//make this component available to the app
export default PostFeeds;
