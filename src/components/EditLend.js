import React, { Component } from 'react';
import {
  Alert,
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
import componentStyles from '../assets/styles/EditLend';

class EditLend extends Component {
  componentDidMount() {
    if (!this.props) {
      return false;
    }
    const { setEditableLend, lends, lendId, newLendTemplate } = this.props;
    const lend = this.getLend(lendId);

    if (!lendId || !newLendTemplate ||
        !lends || !lends.length || !lend) {
      Alert.alert(
        'Błąd!',
        'Błąd podczas ładowania pożyczki, spróbuj ponownie.',
        [
          { text: 'OK', onPress: () => Actions.pop() },
        ],
        { cancelable: false },
      );
      return false;
    }

    setEditableLend(newLendTemplate, lend);
  }

  onDeadlineDateSelect() {
    const { editableLend } = this.props;
    this.refs.deadlineDatePicker.open({
      minDate: new Date(editableLend.createdDate),
      date: new Date(editableLend.deadlineDate),
      maxDate: new Date('2050-01-01')
    });
  }

  onPressEdit() {
    const { editableLend, lends, editLend } = this.props;
    if (editableLend) {
      if (!editableLend.name || !editableLend.person) {
        AlertHelper.show('error', 'Błąd', 'Wszystkie pola są wymagane.');
        return false;
      }
      editLend({
        lends,
        lend: editableLend
      });

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
    const M = new Date(date).getMonth() + 1;
    const D = new Date(date).getDate();
    return `${Y}-${M}-${D}`;
  }

  getLend(id) {
    if (!this.props || !this.props.lends || !this.props.lends.length) {
      return null;
    }
    return this.props.lends.find((lend) => lend.id === id);
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
          text="Edytuj pożyczkę"
          buttonStyle={componentStyles.button}
          onPress={this.onPressEdit.bind(this)}
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
          title="Edytuj pożyczkę"
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

export default connect(mapStateToProps, actions)(EditLend);
