import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { AppIcon } from './';
import { ACCENT_LINEAR_START, ACCENT_LINEAR_END } from '../../assets/styles/common/Variables';
import navBarStyle from '../../assets/styles/common/NavBar';

class NavBarr extends Component {
  // constructor(props) {
  //     super(props);
  // }
  componentWillMount() {
    this.props.setStatusBarHeight(getStatusBarHeight());
  }
  renderBackButton() {
    if (this.props.backButton) {
      return (
        <TouchableOpacity style={[navBarStyle.leftButton]}>
          <View>
            <Text> left button </Text>
          </View>
        </TouchableOpacity>
      );
    }
  }
  renderLeftButton() {
    if (this.props.leftButton) {
      return (
        <TouchableOpacity style={[navBarStyle.leftButton]}>
          <View>
            {this.props.leftButton}
          </View>
        </TouchableOpacity>
      );
    }
  }
  renderTitle() {
    if (this.props.title) {
      return (
        <View style={[navBarStyle.titleHolder]}>
          <Text style={[navBarStyle.title]}>{this.props.title || ''}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <LinearGradient
        colors={[ACCENT_LINEAR_START, ACCENT_LINEAR_END]}
        style={[
          navBarStyle.gradient,
          navBarStyle.navBar,
          {
            paddingTop: this.props.statusBarHeight,
            paddingBottom: this.props.paddingBottom || 0 // padding e.g. for tabs
          }
        ]}
      >
        <View>
          {this.renderTitle()}
        </View>
      </LinearGradient>
    );
  }
}


const mapStateToProps = state => {
  const {
    statusBarHeight
  } = state.defaults;

  return {
    statusBarHeight
  };
};

const NavBar = connect(mapStateToProps, actions)(NavBarr);

export { NavBar };
