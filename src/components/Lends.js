import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { NavBar, Swiper, SwiperPage, LendsList } from './common';
import * as actions from '../actions';
import componentStyles from '../assets/styles/Lends';

class Lends extends Component {
  componentWillMount() {
    this.onChangeList(0);
  }

  onChangeList = (index) => {
    this.props.setLendsSwiperUpdateIndex(index);
    // this.internals.swiperIndex = index;
  }

  getActiveLends = () => this.props.lends.filter((lend) => lend.status === 'active');

  getCompletedLends = () => this.props.lends.filter((lend) => lend.status === 'completed');

  scrollToCompletedLends = () => {
    this.refs.lendsSwiper.swipe();
  }

  scrollToActiveLends = () => {
    this.refs.lendsSwiper.swipe(true);
  }

  render() {
    return (
      <View
        style={[componentStyles.container]}
      >
        <NavBar
          paddingBottom={38}
          title="Twoje pożyczki"
        />
        <View
          style={[componentStyles.swiperButtons]}
        >
          <TouchableOpacity
            onPress={this.scrollToActiveLends}
            style={[componentStyles.swiperButton]}
          >
            <Text
              style={[
                componentStyles.swiperButtonText,
                (this.props.swiperIndex === 0 ? componentStyles.swiperButtonActive : {})
              ]}
            >
              Aktywne
            </Text>
          </TouchableOpacity>
          <View style={componentStyles.swiperButtonSeparator} />
          <TouchableOpacity
            onPress={this.scrollToCompletedLends}
            style={[componentStyles.swiperButton]}
          >
            <Text
              style={[
                componentStyles.swiperButtonText,
                (this.props.swiperIndex === 1 ? componentStyles.swiperButtonActive : {})
              ]}
            >
              Oddane
            </Text>
          </TouchableOpacity>
        </View>
        <Swiper
          disableDefaultUI
          onUpdateIndex={this.onChangeList}
          ref="lendsSwiper"
        >
          <SwiperPage>
            <LendsList
              lends={this.getActiveLends()}
              lendsType="active"
              noItemsText="Brak aktywnych pożyczek"
            />
          </SwiperPage>
          <SwiperPage>
            <LendsList
              lends={this.getCompletedLends()}
              lendsType="completed"
              noItemsText="Brak zakończonych pożyczek"
            />
          </SwiperPage>
        </Swiper>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {
    firstLaunch
  } = state.defaults;

  const {
    swiperIndex,
    lends
  } = state.lends;

  return {
    firstLaunch,
    swiperIndex: swiperIndex || 0,
    lends: lends || []
  };
};

export default connect(mapStateToProps, actions)(Lends);
