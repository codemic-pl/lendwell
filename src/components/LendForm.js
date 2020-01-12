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
import { getDateYMD, formatDate } from '../utils/mixins';
import * as actions from '../actions';
import componentStyles from '../assets/styles/LendForm';

class LendForm extends Component {
  constructor(props) {
    super(props);
    console.log({ that: this, props });
    this.isEditingForm = props.routeName === 'editLend';
  }

  componentDidMount() {
    const { isEditingForm } = this;
    if (isEditingForm) {
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
    } else {
      this.props.setEditableLend(this.props.newLendTemplate, {});
    }
  }

  onDeadlineDateSelect() {
    const { editableLend } = this.props;
    this.refs.deadlineDatePicker.open({
      minDate: new Date(editableLend.createdDate),
      date: new Date(editableLend.deadlineDate),
      maxDate: new Date('2100-01-01')
    });
  }

  onPressSubmit() {
    const { isEditingForm } = this;
    const { editableLend } = this.props;
    if (editableLend) {
      if (!editableLend.name || !editableLend.person) {
        AlertHelper.show('error', 'Błąd', 'Wszystkie pola są wymagane.');
        return false;
      }
      if (isEditingForm) {
        const { lends, editLend } = this.props;
        editLend({
          lends,
          lend: editableLend
        });
      } else {
        this.props.addLend(editableLend);
      }
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
      changedDate = getDateYMD(date);
    }
    setEditableLend(editableLend, {
      deadlineDate: changedDate
    });
  }

  getLend(id) {
    if (!this.props || !this.props.lends || !this.props.lends.length) {
      return null;
    }
    return this.props.lends.find((lend) => lend.id === id);
  }

  renderActionButtons() {
    const { isEditingForm } = this;
    return (
      <View
        style={componentStyles.buttons}
      >
        <Button
          text={isEditingForm ? 'Edytuj pożyczkę' : 'Dodaj pożyczkę'}
          buttonStyle={componentStyles.button}
          onPress={this.onPressSubmit.bind(this)}
        />
      </View>
    );
  }

  render() {
    const { isEditingForm } = this;
    const { editableLend } = this.props;

    return (
      <View
        style={[componentStyles.container]}
      >
        <NavBar
          title={isEditingForm ? 'Edytuj pożyczkę' : 'Dodaj pożyczkę'}
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
            value={formatDate(editableLend.deadlineDate)}
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

export default connect(mapStateToProps, actions)(LendForm);
