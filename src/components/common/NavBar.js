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
// import { AppIcon } from './';
import { ACCENT_LINEAR_START, ACCENT_LINEAR_END } from '../../assets/styles/common/Variables';
import componentStyles from '../../assets/styles/common/NavBar';

class NavBarComponent extends Component {
  // constructor(props) {
  //     super(props);
  // }
  componentWillMount() {
    this.props.setStatusBarHeight(getStatusBarHeight());
  }
  renderBackButton() {
    if (this.props.backButton) {
      return (
        <TouchableOpacity style={[componentStyles.leftButton]}>
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
        <TouchableOpacity style={[componentStyles.leftButton]}>
          <View>
            {this.props.leftButton}
          </View>
        </TouchableOpacity>
      );
    }
  }
  renderTitle() {
    console.log(this.props.title);
    if (this.props.title) {
      return (
        <View style={[componentStyles.titleHolder]}>
          <Text style={[componentStyles.title]}>{this.props.title || ''}</Text>
        </View>
      );
    }
  }

  render() {
    console.log(this.props);
    return (
      <LinearGradient
        colors={[ACCENT_LINEAR_START, ACCENT_LINEAR_END]}
        style={[
          componentStyles.gradient,
          componentStyles.navBar,
          {
            paddingTop: this.props.statusBarHeight,
            paddingBottom: this.props.paddingBottom || 0 // padding e.g. for tabs
          }
        ]}
      >
        {this.renderTitle()}
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

const NavBar = connect(mapStateToProps, actions)(NavBarComponent);

export { NavBar };
