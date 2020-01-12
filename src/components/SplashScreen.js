import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  Platform
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';
import { AppIcon } from './common';
import { ACCENT_LINEAR_START, ACCENT_LINEAR_END } from '../assets/styles/common/Variables';
import componentStyles from '../assets/styles/SplashScreen';

class SplashScreen extends Component {
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    StatusBar.setHidden(false);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(ACCENT_LINEAR_START);
    } else {
      StatusBar.setBarStyle('light-content');
    }

    if (data !== null) {
      if (this.props.firstLaunch) {
        Actions.reset('tutorial');
      } else {
        Actions.reset('home');
      }
    }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('result');
      }, 2000);
    });
  }

  render() {
    return (
      <LinearGradient
        colors={[ACCENT_LINEAR_START, ACCENT_LINEAR_END]}
        style={[componentStyles.gradient]}
      >
        <View style={[componentStyles.logoHolder]}>
          <AppIcon
            name="Logo"
            width="171"
            height="135"
            fill="#FFF"
          />
          <Text style={[componentStyles.name]}>
            <Text style={[componentStyles.name, componentStyles.textBold]}>
              LEND
            </Text>
            WELL
          </Text>
        </View>
      </LinearGradient>
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

export default connect(mapStateToProps, actions)(SplashScreen);
