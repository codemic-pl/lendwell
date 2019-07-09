import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../../actions';
import { AppIcon } from './';
import { ACCENT_LINEAR_START, ACCENT_LINEAR_END } from '../../assets/styles/common/Variables';
import componentStyles from '../../assets/styles/common/NavBar';

class NavBarComponent extends Component {
  // constructor(props) {
  //     super(props);
  // }
  /*
    props:
    - backButton: bool
    - backButtonOnPress: function
    - backButtonContainerStyle: styles
    - leftButton: component
    - leftButtonOnPress: function
    - leftButtonContainerStyle: styles
    - rightButton: component
    - rightButtonOnPress: function
    - rightButtonContainerStyle: styles
    - title: string
    - paddingBottom: Number
  */
  componentWillMount() {
    this.props.setStatusBarHeight(getStatusBarHeight());
  }
  onLeftButtonPress() {
    if (this.props && typeof (this.props.leftButtonOnPress) === 'function') {
      this.props.leftButtonOnPress();
    }
  }
  onBackButtonPress() {
    if (this.props && typeof (this.props.backButtonOnPress) === 'function') {
      this.props.backButtonOnPress();
    } else {
      Actions.pop();
    }
  }
  onRightButtonPress() {
    if (this.props && typeof (this.props.rightButtonOnPress) === 'function') {
      this.props.rightButtonOnPress();
    }
  }

  renderBackButton() {
    if (this.props.backButton) {
      return (
        <TouchableOpacity
          style={[
            componentStyles.button,
            componentStyles.leftButton,
            this.props.backButtonContainerStyle
          ]}
          onPress={this.onBackButtonPress}
        >
          <View>
            <AppIcon
              name="ArrowLeft"
              width="16"
              height="13"
              fill="#FFFFFF"
            />
          </View>
        </TouchableOpacity>
      );
    }
  }
  renderLeftButton() {
    if (this.props.leftButton) {
      return (
        <TouchableOpacity
          style={[
            componentStyles.button,
            componentStyles.leftButton,
            this.props.leftButtonContainerStyle
          ]}
          onPress={this.onLeftButtonPress}
        >
          <View>
            {this.props.leftButton}
          </View>
        </TouchableOpacity>
      );
    }
    return this.renderBackButton();
  }
  renderRightButton() {
    if (this.props.rightButton) {
      return (
        <TouchableOpacity
          style={[
            componentStyles.button,
            componentStyles.rightButton,
            this.props.rightButtonContainerStyle
          ]}
          onPress={this.onRightButtonPress}
        >
          <View>
            {this.props.rightButton}
          </View>
        </TouchableOpacity>
      );
    }
  }
  renderTitle() {
    if (this.props.title) {
      return (
        <Text style={[componentStyles.title]}>{this.props.title || ''}</Text>
      );
    }
  }

  render() {
    return (
      <LinearGradient
        colors={[ACCENT_LINEAR_START, ACCENT_LINEAR_END]}
        style={[
          componentStyles.navBar,
          {
            paddingTop: this.props.statusBarHeight,
            paddingBottom: this.props.paddingBottom || 0 // padding e.g. for tabs
          }
        ]}
      >
        <View style={[componentStyles.navBarContainer]}>
          {this.renderLeftButton()}
          {this.renderTitle()}
          {this.renderRightButton()}
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

const NavBar = connect(mapStateToProps, actions)(NavBarComponent);

export { NavBar };
