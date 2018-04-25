//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TextInput
} from "react-native";

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
  Item,
  Right,
  Body,
  Input
} from "native-base";
import { OFF_WHITE, DARK_TEXT, LIGHT_GRAY } from "../../utils/Color";
import Path from "./../../assets/images/ios-image/path";
import { BG_COLOR } from "./../../utils/Color";
import StoryItem from "./../../customComponent/StoryItem";
import { LIGHT_TEXT } from "./../../utils/Color";
import { TouchableOpacity } from "react-native";

// create a component
class PostFeeds extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="newsletter" type="Entypo" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <Container style={{ backgroundColor: BG_COLOR }}>
        <Content>
          {/**
           *Stories view
           **/}
          <View style={styles.container}>
            <View
              style={{
                justifyContent: "space-between",
                padding: 8,
                flexDirection: "row"
              }}
            >
              <View>
                <Text style={[styles.textStyle, { fontWeight: "bold" }]}>
                  Stories
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Icon
                  name="ios-play-outline"
                  style={{ paddingRight: 5, fontSize: 19 }}
                />
                <Text style={styles.textStyle}>Play All</Text>
              </View>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <StoryItem
                uriPath={require("./../../assets/images/1.jpg")}
                userName="Your Story"
              />
              <StoryItem
                uriPath={require("./../../assets/images/2.jpg")}
                userName="Tony Mony"
              />
              <StoryItem
                uriPath={require("./../../assets/images/3.jpg")}
                userName="Ring Ring Ring Ring"
              />
              <StoryItem
                uriPath={require("./../../assets/images/4.jpg")}
                userName="Pinga Porry"
              />
              <StoryItem
                uriPath={require("./../../assets/images/5.jpg")}
                userName="Chaman Choti"
              />
              <StoryItem
                uriPath={require("./../../assets/images/3.jpg")}
                userName="Sabse bada gunda"
              />
            </ScrollView>
          </View>

          {/*
          *Whats in your mind 
          */}
          <CardItem
            style={{
              marginTop: 10,
              borderBottomColor: LIGHT_GRAY,
              borderBottomWidth: 1
            }}
          >
            <Left>
              <Thumbnail
                source={require("./../../assets/images/1.jpg")}
                style={{ borderWidth: 1, borderColor: LIGHT_TEXT }}
              />
              <Body>
                <Text style={{ color: DARK_TEXT, fontSize: 18 }}>
                  What's on your mind?
                </Text>
                {/*
            <TextInput
                  placeholder="What's on your mind?"
                  placeholderTextColor={DARK_TEXT}
                  underlineColorAndroid="transparent"
                  style={{ color: DARK_TEXT, fontSize: 18 }}
                />
          */}
              </Body>
            </Left>
          </CardItem>
          <View
            style={{
              backgroundColor: "#fff",
              flexDirection: "row",
              flex: 1,
              padding: 5
            }}
          >
            <TouchableOpacity
              onPress={() => alert("Video")}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row"
                }}
              >
                <Icon
                  active
                  style={{ color: "#EB4043" }}
                  type="Entypo"
                  name="video-camera"
                />
                <Text style={{ color: "#EB4043", padding: 5 }}>Live</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderRightWidth: 0.5,
                borderColor: LIGHT_TEXT
              }}
            />
            <TouchableOpacity
              onPress={() => alert("Photo")}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row"
                }}
              >
                <Icon active style={{ color: "#88BC51" }} name="md-photos" />
                <Text style={{ color: DARK_TEXT, padding: 5 }}>Photo</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderRightWidth: 0.5,
                borderColor: LIGHT_TEXT
              }}
            />
            <TouchableOpacity
              onPress={() => alert("Check In")}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row"
                }}
              >
                <Icon
                  active
                  style={{ color: "#EB4043" }}
                  type="MaterialIcons"
                  name="location-on"
                />
                <Text style={{ color: DARK_TEXT }}>Check In</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/*
          *Content
          */}
          <View style={{ backgroundColor: "#fff", marginTop: 10 }}>
            <View
              style={{ backgroundColor: "#fff", marginTop: 10, height: 100 }}
            >
              <Text>1</Text>
            </View>
          </View>
          <View style={{ backgroundColor: "#fff", marginTop: 10 }}>
            <View
              style={{ backgroundColor: "#fff", marginTop: 10, height: 100 }}
            >
              <Text>1</Text>
            </View>
          </View>
          <View style={{ backgroundColor: "#fff", marginTop: 10 }}>
            <View
              style={{ backgroundColor: "#fff", marginTop: 10, height: 100 }}
            >
              <Text>1</Text>
            </View>
          </View>
          <View style={{ backgroundColor: "#fff", marginTop: 10 }}>
            <View
              style={{ backgroundColor: "#fff", marginTop: 10, height: 100 }}
            >
              <Text>1</Text>
            </View>
          </View>
          <View style={{ backgroundColor: "#fff", marginTop: 10 }}>
            <View
              style={{ backgroundColor: "#fff", marginTop: 10, height: 100 }}
            >
              <Text>1</Text>
            </View>
          </View>
          <View style={{ backgroundColor: "#fff", marginTop: 10 }}>
            <View
              style={{ backgroundColor: "#fff", marginTop: 10, height: 100 }}
            >
              <Text>1</Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 160,
    width: Dimensions.get("window").width,
    backgroundColor: "#fff"
  }
});

//make this component available to the app
export default PostFeeds;
