import React, { Component } from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { DatePickerDialog } from 'react-native-datepicker-dialog';
import { AlertHelper } from '../helpers/AlertHelper';
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

  onDeadlineDateSelect() {
    const { editableLend } = this.props;
    this.refs.deadlineDatePicker.open({
      minDate: new Date(editableLend.createdDate),
      date: new Date(editableLend.deadlineDate),
      maxDate: new Date('2050-01-01')
    });
  }

  onPressAdd() {
    const { editableLend } = this.props;
    if (!editableLend.name || !editableLend.person) {
      AlertHelper.show('error', 'Błąd', 'Wszystkie pola są wymagane.');
      return false;
    }
    if (editableLend) {
      this.props.addLend(editableLend);
      Actions.pop();
    }
  }

  onPersonChanged(text) {
    const { setEditableLend, editableLend } = this.props;
    setEditableLend(editableLend, {
      person: text
    });
  }

  onNameChanged(text) {
    const { setEditableLend, editableLend } = this.props;
    setEditableLend(editableLend, {
      name: text
    });
  }

  onDeadlineDateChanged(date) {
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
    let M = new Date(date).getMonth() + 1;
    if (M < 10) {
      M = `0${M}`;
    }
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
            onChangeText={this.onPersonChanged.bind(this)}
          />
          <Input
            placeholder="Rzecz, np. wiertarka"
            numberOfLines={6}
            label="Co pożyczyłeś"
            value={editableLend.name}
            onChangeText={this.onNameChanged.bind(this)}
          />
          <Input
            placeholder="30/12/2019"
            label="Data planowanego zwrotu"
            disabled
            onDisabledClick={this.onDeadlineDateSelect.bind(this)}
            value={this.formatDate(editableLend.deadlineDate)}
            onChangeText={this.onDeadlineDateChanged.bind(this)}
          />
          {/* TODO: Add remind time */}
          {this.renderActionButtons()}
        </ScrollView>
        <DatePickerDialog
          ref="deadlineDatePicker"
          onDatePicked={this.onDeadlineDateChanged.bind(this)}
        />
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
