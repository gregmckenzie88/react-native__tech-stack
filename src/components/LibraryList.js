import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList } from "react-native";
import ListeItem from "./ListItem";

class LibraryList extends Component {
  renderItem(library) {
    return <ListeItem library={library} />;
  }
  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id.toString()}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
