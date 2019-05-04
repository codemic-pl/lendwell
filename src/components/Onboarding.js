import React, { Component } from 'react';
import {
  Text,
  SafeAreaView,
  StatusBar,
  Platform
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { AppIcon, Swiper, SwiperPage } from './common';
import { ACCENT_LINEAR_START, ACCENT_LINEAR_END } from '../assets/styles/common/Variables';
import onboardingStyles from '../assets/styles/Onboarding';

class Onboarding extends Component {
  componentDidMount() {
    StatusBar.setHidden(false);
    StatusBar.setBarStyle('light-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent');
    }
  }
  render() {
    const closeOnboarding = function () {
      console.log('Close');
    };
    return (
      <LinearGradient
        colors={[ACCENT_LINEAR_START, ACCENT_LINEAR_END]}
        style={[onboardingStyles.gradient]}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <Swiper onLastSlide={closeOnboarding}>
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
                Zapisuj co i o jakiej wartości pożyczyłeś/aś.
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
                Przypominaj o pożyczce za pomocą powiadomień PUSH bądź wiadomości SMS.
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
