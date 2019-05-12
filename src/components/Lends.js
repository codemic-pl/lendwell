import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { NavBar, Swiper, SwiperPage } from './common';
import * as actions from '../actions';
import lendsStyles from '../assets/styles/Lends';

class Lends extends Component {
  onChangeList = (index) => {
    console.log(this.props);
    this.props.setLendsSwiperUpdateIndex(index);
    // this.internals.swiperIndex = index;
  }

  scrollToCompletedLends = () => {
    this.refs.lendsSwiper.swipe();
  }

  scrollToActiveLends = () => {
    this.refs.lendsSwiper.swipe(true);
  }

  initState(props) {
    return props;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavBar
          paddingBottom={38}
          title="Twoje pożyczki"
        />
        <View
          style={[lendsStyles.swiperButtons]}
        >
          <TouchableOpacity
            onPress={this.scrollToActiveLends}
            style={[lendsStyles.swiperButton]}
          >
            <Text
              style={[
                lendsStyles.swiperButtonText,
                (this.props.swiperIndex === 0 ? lendsStyles.swiperButtonActive : {})
              ]}
            >
              Aktywne
            </Text>
          </TouchableOpacity>
          <View style={lendsStyles.swiperButtonSeparator} />
          <TouchableOpacity
            onPress={this.scrollToCompletedLends}
            style={[lendsStyles.swiperButton]}
          >
            <Text
              style={[
                lendsStyles.swiperButtonText,
                (this.props.swiperIndex === 1 ? lendsStyles.swiperButtonActive : {})
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
            <TouchableOpacity onPress={this.onPress}>
              <Text>Lends1</Text>
            </TouchableOpacity>
          </SwiperPage>
          <SwiperPage>
            <TouchableOpacity onPress={this.onPressBack}>
              <Text>Lends2</Text>
            </TouchableOpacity>
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
    swiperIndex
  } = state.lends;

  return {
    firstLaunch,
    swiperIndex
  };
};

export default connect(mapStateToProps, actions)(Lends);
