import React, { Component } from 'react';
import {
  Text,
  SafeAreaView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';
import { AppIcon, Swiper, SwiperPage } from './common';
import { ACCENT_LINEAR_START, ACCENT_LINEAR_END } from '../assets/styles/common/Variables';
import onboardingStyles from '../assets/styles/Onboarding';

class Onboarding extends Component {
  render() {
    const closeOnboarding = function () {
      this.props.setFirstAppLaunch(false);
      Actions.lends();
    };
    return (
      <LinearGradient
        colors={[ACCENT_LINEAR_START, ACCENT_LINEAR_END]}
        style={[onboardingStyles.gradient]}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <Swiper onLastSlide={closeOnboarding.bind(this)}>
            <SwiperPage customStyle={onboardingStyles.slide}>
              <AppIcon
                name="OnboardingLend"
                width="227"
                height="227"
                fill="#FFF"
                style={onboardingStyles.icon}
              />
              <Text style={[onboardingStyles.heading]}>Pożyczaj</Text>
              <Text style={[onboardingStyles.description]}>
                Miej kontrolę nad dobrami, które pożyczasz.
              </Text>
            </SwiperPage>
            <SwiperPage customStyle={onboardingStyles.slide}>
              <AppIcon
                name="OnboardingSave"
                width="214"
                height="227"
                fill="#FFF"
                style={onboardingStyles.icon}
              />
              <Text style={[onboardingStyles.heading]}>Zapisuj</Text>
              <Text style={[onboardingStyles.description]}>
                Zapisuj co i na jaki czas pożyczyłeś/aś.
              </Text>
            </SwiperPage>
            <SwiperPage customStyle={onboardingStyles.slide}>
              <AppIcon
                name="OnboardingRemind"
                width="227"
                height="227"
                fill="#FFF"
                style={onboardingStyles.icon}
              />
              <Text style={[onboardingStyles.heading]}>Przypominaj</Text>
              <Text style={[onboardingStyles.description]}>
                Szybko i łatwo, przypominaj o pożyczce.
              </Text>
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
