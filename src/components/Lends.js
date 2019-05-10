import React, { Component } from 'react';
import {
  Text,
  SafeAreaView,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { ACCENT_LINEAR_START, ACCENT_LINEAR_END } from '../assets/styles/common/Variables';
import lendsStyles from '../assets/styles/Lends';

class Lends extends Component {
  render() {
    return (
      <View>
        <Text>Lends</Text>
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
