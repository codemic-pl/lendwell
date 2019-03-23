import React, { Component } from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Onboarding extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <View />
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

export default connect(mapStateToProps, actions)(Onboarding);
