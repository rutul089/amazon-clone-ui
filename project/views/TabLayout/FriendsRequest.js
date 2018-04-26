//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert
} from "react-native";
import { Icon, Container, Content, Thumbnail, Button,Spinner } from "native-base";
import {
  OFF_WHITE,
  BG_COLOR,
  LIGHT_GRAY,
  MID_TEXT,
  DARK_TEXT,
  LIGHT_TEXT,
  SECONDARY_BLUE,
  ACTIVE_TINT_COLOR
} from "../../utils/Color";
import UserFeeds from "./../../customComponent/UserFeeds";
import FriendRequestItem from "../../customComponent/FriendRequestItem";
import axios from "axios";
// create a component
class FriendsRequest extends Component {
  state = { users: [], results: [], isLoading: true ,people:[]};

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

      axios
      .get("https://randomuser.me/api/?results=10")
      //.then(response =>console.log(response));
      .then(response =>
        this.setState({
          people: response.data.results,
          isLoading: false
        })
      );
  }




  displayingrenderFriendRequest() {
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
      return this.renderFriendRequest();
    }
  }

  displayingrenderPeopleYouKnow() {
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
      return this.renderPeopleYouKnow();
    }
  }

  



  renderFriendRequest() {
    _onConfirm = () => {
      alert("On Confirm");
    };

    _onDelete = () => {
      alert("On Delete");
    };
    return this.state.results.map(results => (

      
      <FriendRequestItem
        thumbnailUri={{ uri: results.picture.large }}
        requesterName={results.name.first + " " + results.name.last}
        mutualFriend="27"
        onConfirm={_onConfirm}
        onDelete={_onDelete}
        negative="Delete"
        possitive="Confirm"
      />
    ));
  }


  renderPeopleYouKnow() {
    _onConfirm = () => {
      alert("Add Friend");
    };

    _onDelete = () => {
      alert("Remove");
    };
    return this.state.people.map(people => (

      
      <FriendRequestItem
        thumbnailUri={{ uri: people.picture.large }}
        requesterName={people.name.first + " " + people.name.last}
        mutualFriend="27"
        onConfirm={_onConfirm}
        onDelete={_onDelete}
        possitive="Add Friend"
        negative="Remove"
      />
    ));
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="people" type="SimpleLineIcons" style={{ color: tintColor }} />
    )
  };

  render() {
   
    return (
      <Container style={{ backgroundColor: "#FFF" }}>
        <Content>
          <View
            style={{
              backgroundColor: LIGHT_GRAY,
              paddingVertical: 5,
              borderBottomWidth: 0.5
            }}
          >
            <Text style={{ padding: 5, color: MID_TEXT, fontSize: 14 }}>
              FRIEND REQUEST
            </Text>
          </View>

      

          {this.displayingrenderFriendRequest()}
          <View
            style={{
              backgroundColor: LIGHT_GRAY,
              paddingVertical: 5,
              borderBottomWidth: 0.5
            }}
          >
            <Text style={{ padding: 5, color: MID_TEXT, fontSize: 14 }}>
              PEOPLE YOU MAY KNOW
            </Text>
          </View>
          {this.displayingrenderPeopleYouKnow()}
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
export default FriendsRequest;
