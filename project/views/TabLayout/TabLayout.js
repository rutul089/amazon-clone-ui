//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ToolbarAndroid,
  Dimensions
} from "react-native";
import {
  Icon,
  Header,
  Left,
  Right,
  Body,
  Item,
  Input,
  Button
} from "native-base";

import { TabNavigator } from "react-navigation";
import PostFeeds from "./PostFeeds";
import FriendsRequest from "./FriendsRequest";
import Notification from "./Notification";
import MyProfile from "./MyProfile";
import MarketPlace from "./MarketPlace";
import {
  INACTIVE_TINT_COLOR,
  SEARCH_BAR_ANDROID,
  LIGHT_TEXT,
  SEARCH_BAR_ITEM,
  HEADER_BLUE,
  HEADER_BLUE_IOS,
  SEARCH_BAR_IOS,
  ACTIVE_TINT_COLOR
} from "./../../utils/Color";

// create a component
class TabLayout extends Component {
  static navigationOptions = {
    /* Your custom header */
    header: (
      <Header
        style={{
          justifyContent: "center",
          alignItems: "center",
          ...Platform.select({
            android: {
              backgroundColor: HEADER_BLUE
            },
            ios: {
              backgroundColor: HEADER_BLUE_IOS
            }
          }),
          flexDirection: "row"
        }}
      >
        <TouchableOpacity
          style={{ flex: 1, alignItems: "flex-start" }}
          onPress={() => alert("Click!!!")}
        >
          <Icon
            name="camera"
            type="Entypo"
            style={{ paddingLeft: 10, color: "#fff" }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 4,
            ...Platform.select({
              android: {
                backgroundColor: SEARCH_BAR_ANDROID
              },
              ios: {
                backgroundColor: SEARCH_BAR_IOS
              }
            }),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            padding: 4,
            flexDirection: "row"
          }}
        >
          <Icon
            name="ios-search"
            type="Ionicons"
            style={{ paddingLeft: 10, color: SEARCH_BAR_ITEM }}
          />
          <Text style={{ color: SEARCH_BAR_ITEM, paddingLeft: 8 }}>Search</Text>
        </View>
        <TouchableOpacity
          style={{ flex: 1, alignItems: "flex-end" }}
          onPress={() => alert("Click!!!")}
        >
          <Icon
            style={{ paddingRight: 10, color: "#fff" }}
            name="facebook-messenger"
            type="MaterialCommunityIcons"
          />
        </TouchableOpacity>
      </Header>
    )
  };

  render() {
    return <FbTabNavigator />;
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

const FbTabNavigator = TabNavigator(
  {
    PostFeeds: {
      screen: PostFeeds
    },
    FriendsRequest: {
      screen: FriendsRequest
    },
    MarketPlace: {
      screen: MarketPlace
    },
    Notification: {
      screen: Notification
    },
    MyProfile: {
      screen: MyProfile
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: false,
    tabBarPosition: "bottom",
    tabBarOptions: {
      indicatorStyle: {
        backgroundColor: "#fff"
      },
      style: {
        borderTopWidth: 1,
        borderTopColor: "#d1cece",

        backgroundColor: "#fcfcfcfc"
      },
      iconStyle: {
        width: 30,
        height: 30
      },
      activeTintColor: ACTIVE_TINT_COLOR,
      inactiveTintColor: INACTIVE_TINT_COLOR,
      showLabel: false,
      showIcon: true
    }
  }
);
//make this component available to the app
export default TabLayout;
