//import liraries
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import {
  CardItem,
  Text,
  Thumbnail,
  Icon,
  Container,
  Button,
  Dimensions
} from "native-base";
import {
  DARK_TEXT,
  LIGHT_TEXT,
  MID_TEXT,
  COLOR_ACCENT,
  LIGHT_GRAY
} from "./../utils/Color";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

// create a component

//imgUri,Name,Hour,city,icon(globe or calender),textDisc,image,comments,imagUri,commentName,comment
const UserFeeds = ({
  imageUri,
  name,
  hour,
  city,
  iconName,
  iconType,
  disc,
  comment,
  commentName,
  senderImage,
  bodyImage,
  senderComment
}) => {
  return (
    <View>
      <CardItem
        style={{
          marginTop: 10
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1
          }}
        >
          <Thumbnail
            source={imageUri}
            style={{ borderWidth: 1, borderColor: LIGHT_TEXT }}
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "flex-start",
              marginLeft: 10
            }}
          >
            <Text
              style={{
                color: DARK_TEXT,
                fontSize: 18,
                fontWeight: "bold"
              }}
            >
              {name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text note> {hour}</Text>
              <Text note> . {city}</Text>

              {/*name="calendar-range" type ="MaterialCommunityIcons"*/}
              <Icon
                name={iconName}
                type={iconType}
                style={{ marginLeft: 5, fontSize: 19, color: "grey" }}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "flex-start"
            }}
          >
            <Icon
              type="MaterialIcons"
              name="more-horiz"
              style={{ color: MID_TEXT }}
            />
          </View>
        </View>
      </CardItem>
      <CardItem>
        <View>
          <Text style={{ color: DARK_TEXT }}>{disc}</Text>
        </View>
      </CardItem>
      <CardItem cardBody>
        <Image
          style={{ margin: 4, height: 250, width: null, flex: 1 }}
          source={bodyImage}
        />
      </CardItem>
      <CardItem>
        <Text note>{comment}</Text>
      </CardItem>
      <View
        style={{
          backgroundColor: "#fff"
        }}
      >
        <View
          style={{
            flex: 1,
            paddingVertical: 8,
            paddingHorizontal: 8,
            marginHorizontal: 25,
            borderBottomWidth: 0.6,
            borderTopWidth: 0.5,
            borderBottomColor: "#000",
            borderTopColor: "#000",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon
                active
                name="like"
                type="EvilIcons"
                style={[styles.accentStyle, { fontSize: 30 }]}
              />
              <Text style={styles.accentStyle}>Like</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon
                active
                name="comment-outline"
                type="MaterialCommunityIcons"
                style={[styles.accentStyle, { fontSize: 22, marginRight: 5 }]}
              />
              <Text style={styles.accentStyle}>Comment</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <CardItem>
        <Thumbnail
          circular
          source={senderImage}
          style={{ borderWidth: 1, borderColor: LIGHT_TEXT }}
        />
        <View style={styles.comments}>
          <Text style={{ paddingTop: 5, fontWeight: "500", color: DARK_TEXT }}>
            {commentName}
          </Text>
          <Text style={{ fontSize: 15, paddingBottom: 4, color: DARK_TEXT }}>
            {senderComment}
          </Text>
        </View>
      </CardItem>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  },
  accentStyle: {
    color: DARK_TEXT,
    fontSize: 15
  },
  comments: {
    backgroundColor: LIGHT_GRAY,
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 5,
    borderRadius: 40
  }
});

//make this component available to the app
export default UserFeeds;
