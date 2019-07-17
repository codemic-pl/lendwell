import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Blank extends Component {
  render() {
    return (
      <View />
    );
  }
}

const mapStateToProps = () => {
  return {
  };
};

export default connect(mapStateToProps, actions)(Blank);
