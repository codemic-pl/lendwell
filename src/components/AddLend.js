import React, { Component } from 'react';
import {
  Alert,
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';
import {
  // AppIcon,
  Button,
  NavBar,
} from './common';
import * as actions from '../actions';
import componentStyles from '../assets/styles/AddLend';

class AddLend extends Component {
  componentDidMount() {
    this.props.setEditableLend(this.props.newLendTemplate);
  }
  onPressAdd() {
    // TODO: Edit press
    console.log('onPressAdd');
  }

  getDateYMD(someDate) {
    const date = someDate || new Date();
    const Y = new Date(date).getFullYear();
    const M = new Date(date).getMonth() + 1;
    const D = new Date(date).getDate();
    return `${Y}-${M}-${D}`;
  }
  formatDate(someDate) {
    const date = someDate || new Date();
    return new Date(date).toLocaleDateString('pl-PL');
  }
  renderActionButtons() {
    return (
      <View
        style={componentStyles.buttons}
      >
        <Button
          text="Dodaj pożyczkę"
          buttonStyle={componentStyles.button}
          onPress={this.onPressAdd.bind(this)}
        />
      </View>
    );
  }

  render() {
    const { editableLend } = this.props;
    console.log(editableLend);

    return (
      <View
        style={[componentStyles.container]}
      >
        <NavBar
          title="Dodaj pożyczkę"
          backButton
        />
        <ScrollView style={[componentStyles.details]}>
          {/* Input: Data planowanego zwrotu */}
          {/* Input: Nazwa przedmiotu */}
          {/* Input: Nazwa pożyczkobiorcy */}
          {/* TODO: Add remind time */}
          {this.renderActionButtons()}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {
    lends,
    editableLend,
    newLendTemplate
  } = state.lends;

  return {
    lends,
    editableLend,
    newLendTemplate
  };
};

export default connect(mapStateToProps, actions)(AddLend);
