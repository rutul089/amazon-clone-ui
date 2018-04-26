//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Icon, Container, Content, Thumbnail, Button } from "native-base";
import {
  OFF_WHITE,
  BG_COLOR,
  LIGHT_GRAY,
  MID_TEXT,
  DARK_TEXT,
  LIGHT_TEXT,
  SECONDARY_BLUE,
  ACTIVE_TINT_COLOR
} from "../utils/Color";

// create a component
const FriendRequestItem = ({ thumbnailUri, requesterName, mutualFriend ,onConfirm,onDelete,possitive,negative}) => {
  return (
    <View style={{ borderBottomWidth: 0.5, padding: 5 }}>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          flexDirection: "row",
          padding: 5
        }}
      >
        <View>
          <Thumbnail square large source={thumbnailUri} />
        </View>
        <View style={{ flexDirection: "column", marginLeft: 10, flex: 1 }}>
          <View>
            <Text style={{ color: DARK_TEXT, fontWeight: "400", fontSize: 18 }}>
            {requesterName}
              
            </Text>
            <Text style={{ color: MID_TEXT, fontWeight: "400", fontSize: 16 }}>
              {mutualFriend}  mutal friends
            </Text>
          </View>

          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={{ flex: 0.5, padding: 5 }}>
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: ACTIVE_TINT_COLOR,
                  paddingVertical: 9,
                  borderRadius: 4
                }}
                onPress={onConfirm}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  {possitive}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 0.5, padding: 5 }}>
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 0.5,
                  backgroundColor: BG_COLOR,
                  paddingVertical: 9,
                  borderRadius: 4
                }}
                onPress={onDelete}
              >
                <Text style={{ color: DARK_TEXT, fontWeight: "bold" }}>
                  {negative}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
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
export default FriendRequestItem;
