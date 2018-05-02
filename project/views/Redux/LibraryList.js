//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ListView } from "react-native";
import { connect } from "react-redux";
import ListItem from "./../../customComponent/ListItem";

// create a component
class LibraryList extends Component {
  componentDidMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.setState.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    console.log(this.props);
    return <ListView dataSource={this.dataSource} 
    renderRow={this.renderRow} />;
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

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

//make this component available to the app
export default connect(mapStateToProps)(LibraryList);
