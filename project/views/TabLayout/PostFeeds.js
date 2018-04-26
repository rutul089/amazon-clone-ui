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
  Spinner,
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
import axios from "axios";
import UserFeeds from "../../customComponent/UserFeeds";
// create a component
class PostFeeds extends Component {
  state = { users: [], results: [], isLoading: true };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=10")
      //.then(response =>console.log(response));
      .then(response =>
        this.setState({
          users: response.data,
          results: response.data.results,
          isLoading: false
        })
      );
  }
  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  displayingData() {
    if (this.state.isLoading) {
      return (
        <View
          style={{
            width: Dimensions.get("window").width,
            justifyContent: "center",
            alignSelf: "center"
          }}
        >
          <Spinner style={{ justifyContent: "center", alignItems: "center" }} />
        </View>
      );
    } else {
      return this.renderUsers();
    }
  }

  renderUsers() {
    //On click
    _OnClick = abc => {
      alert(abc);
    };

    return this.state.results.map(results => (
      <StoryItem
        key={results.email}
        uriPath={{ uri: results.picture.large }}
        userName={results.name.first + " " + results.name.last}
        onClick={() => _OnClick(results.gender)}
      />
    ));
  }

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
                width: Dimensions.get("window").width,
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
              {this.displayingData()}
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
                  style={{ color: "#E3186C" }}
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

          {/*
          *
//imgUri,Name,Hour,city,icon(globe or calender),textDisc,image,comments,imagUri,commentName,comment
          */}
          <UserFeeds
            imageUri={require("../../assets/images/1.jpg")}
            name="Domingo Vega"
            hour="2 Hours"
            city="Valencia"
            iconName="calendar-range"
            iconType="MaterialCommunityIcons"
            disc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a velit
            quis sapien mattis suscipit. Fusce sed tortor at risus eleifend
            scelerisque sit amet ac turpis. Praesent semper massa at turpis
            lacinia fermentum. Proin consectetur in nunc sit amet venenatis."
            bodyImage={require("../../assets/images/feed1.jpg")}
            comment="14 Comment"
            senderImage={require("../../assets/images/3.jpg")}
            commentName="Juho Kauppi"
            senderComment="Nice photo "
          />

          <UserFeeds
            imageUri={require("../../assets/images/3.jpg")}
            name="Domingo Vega"
            hour="4 Hours"
            city="Jerichower land"
            iconName="globe"
            disc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a velit
            quis sapien mattis suscipit. Fusce sed tortor at risus eleifend
            scelerisque sit amet ac turpis. Praesent semper massa at turpis
            lacinia fermentum. Proin consectetur in nunc sit amet venenatis."
            comment="14 Comment"
            senderImage={require("../../assets/images/4.jpg")}
            commentName="Aaron Polat"
            senderComment="sadsadsaodsad"
          />

         
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
