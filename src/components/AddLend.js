import React, { Component } from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  Button,
  Input,
  NavBar,
} from './common';
import * as actions from '../actions';
import componentStyles from '../assets/styles/AddLend';

class AddLend extends Component {
  componentDidMount() {
    this.props.setEditableLend(this.props.newLendTemplate, {});
  }

  onPressAdd() {
    // TODO: Edit press
    const { editableLend } = this.props;
    if (editableLend) {
      this.props.addLend(editableLend);
      Actions.pop();
    }
  }

  onChangePerson(text) {
    const { setEditableLend, editableLend } = this.props;
    setEditableLend(editableLend, {
      person: text
    });
  }

  onChangeName(text) {
    const { setEditableLend, editableLend } = this.props;
    console.log(editableLend);
    setEditableLend(editableLend, {
      name: text
    });
  }

  onChangeDeadlineDate(date) {
    const { setEditableLend, editableLend } = this.props;
    let changedDate = date;
    if (typeof (date) !== 'string') {
      changedDate = this.getDateYMD(date);
    }
    setEditableLend(editableLend, {
      deadlineDate: changedDate
    });
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
    console.log(this.props);

    return (
      <View
        style={[componentStyles.container]}
      >
        <NavBar
          title="Dodaj pożyczkę"
          backButton
        />
        <ScrollView style={[componentStyles.details]}>
          <Input
            placeholder="Imię"
            label="Komu pożyczyłeś"
            value={editableLend.person}
            onChangeText={this.onChangePerson.bind(this)}
          />
          <Input
            placeholder="Rzecz, np. wiertarka"
            numberOfLines={6}
            label="Co pożyczyłeś"
            value={editableLend.name}
            onChangeText={this.onChangeName.bind(this)}
          />
          <Input
            placeholder="30/12/2019"
            label="Data planowanego zwrotu"
            disabled
            value={this.formatDate(editableLend.deadlineDate)}
            onChangeText={this.onChangeDeadlineDate.bind(this)}
          />
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
