//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  LayoutAnimation
} from "react-native";
import { CardItem } from "native-base";
import * as actions from "./../views/Redux/actions";
import { connect } from "react-redux";

// create a component
class ListItem extends Component {


  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDec() {
    const { library, expand } = this.props;

    if (expand) {
      return (
        <CardItem style={{flex:1, paddingHorizontal: 5, backgroundColor: "#f2f2f2" }}>
          <Text style={{ fontSize: 15, color: "#000" }}>
            {library.description}
          </Text>
        </CardItem>
      );
    }
  }

  render() {
    const { id, title } = this.props.library;

    return (
      <TouchableNativeFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardItem style={{ borderBottomWidth: 1, paddingHorizontal: 5 }}>
            <Text style={{ fontSize: 17, color: "#000" }}>{title}</Text>
          </CardItem>
          {this.renderDec()}
        </View>
      </TouchableNativeFeedback>
    );
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

/**
 * make this component available to the app
 * Passing null because we need map function as first args but we
 * dont have any map function thats why we pass null
 */

const mapStateToProps = (state, ownProps) => {
  const expand = state.selectedLibraryId === ownProps.library.id;

  return { expand };
};
export default connect(mapStateToProps, actions)(ListItem);
