import React, { Component } from 'react';
import {
  Text,
  SafeAreaView,
  StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Swiper, SwiperPage } from './common';
import { ACCENT_LINEAR_START, ACCENT_LINEAR_END } from '../assets/styles/common/Variables';
import onboadingStyles from '../assets/styles/Onboarding';

class Onboarding extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    const test = function () {
      console.log('TEST');
    };
    return (
      <LinearGradient
        colors={[ACCENT_LINEAR_START, ACCENT_LINEAR_END]}
        style={[onboadingStyles.gradient]}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <Swiper onLastSlide={test}>
            <SwiperPage>
              <Text>Test1</Text>
            </SwiperPage>
            <SwiperPage>
              <Text>Test2</Text>
            </SwiperPage>
            <SwiperPage>
              <Text>Test3</Text>
            </SwiperPage>
          </Swiper>
        </SafeAreaView>
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

export default connect(mapStateToProps, actions)(Onboarding);
