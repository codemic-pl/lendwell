import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  AppIcon,
  NavBar
} from './common';
import * as actions from '../actions';
import componentStyles from '../assets/styles/LendView';

class Lends extends Component {
  onPressEdit() {
    console.log('onPressEdit');
  }
  renderEditButton() {
    return (
      <AppIcon
        name="Pencil"
        width="24"
        height="24"
        fill="#FFFFFF"
      />
    );
  }
  render() {
    return (
      <View
        style={[componentStyles.container]}
      >
        <NavBar
          title="Podgląd pożyczki"
          backButton
          rightButton={this.renderEditButton}
          rightButtonOnPress={this.onPressEdit}
          rightButtonContainerStyle={[
            componentStyles.editButton
          ]}
        />
        <TouchableOpacity
          onPress={() => {
            Actions.pop();
          }}
        >
          <Text>Test</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {
    firstLaunch
  } = state.defaults;

  return {
    firstLaunch
  };
};

export default connect(mapStateToProps, actions)(Lends);
