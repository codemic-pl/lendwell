import React, { Component } from 'react';
import {
  Text,
  Alert,
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  AppIcon,
  Button,
  NavBar,
  LendDetail
} from './common';
import * as actions from '../actions';
import componentStyles from '../assets/styles/LendView';

class LendView extends Component {
  state = this.initState(this.props);
  componentWillMount() {
    if (!this.props || !this.props.id ||
        !this.props.lends || !this.props.lends.length ||
        !this.getLend(this.props.id)) {
      Alert.alert(
        'Błąd!',
        'Nie ma takiej pożyczki.',
        [
          { text: 'OK', onPress: () => Actions.pop() },
        ],
        { cancelable: false },
      );
      return false;
    }
  }
  onPressEdit() {
    console.log('onPressEdit');
  }
  getLend(id) {
    if (!this.props || !this.props.lends || !this.props.lends.length) {
      return null;
    }
    return this.props.lends.find((lend) => lend.id === id);
  }

  getDateYMD(someDate) {
    const date = someDate || new Date();
    return `${new Date(date).getFullYear()}-
            ${new Date(date).getMonth() + 1}-
            ${new Date(date).getDate()}`;
  }
  getRemindTime() {
    // TODO: get remind time
    return '5 dni przed planowaną datą zwrotu';
  }
  getRealReturnDate() {
    const lend = { ...this.state.lend };
    return `${this.formatDate(lend.returnDate)} \
${this.renderReturnInDays(lend.returnDate, lend.deadlineDate)}`;
  }
  formatDate(someDate) {
    const date = someDate || new Date();
    return new Date(date).toLocaleDateString('pl-PL');
  }
  isToday(someDate) {
    if (!someDate) {
      return;
    }
    const today = new Date();
    const date = new Date(someDate);
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  }
  returnIn(deadlineDate, returnDate) {
    if (this.isToday(deadlineDate)) {
      return 0;
    }
    let daysCount = ((new Date(deadlineDate) - new Date(this.getDateYMD(returnDate))) /
                    (1000 * 60 * 60 * 24));
    if (daysCount < 0) {
      daysCount = Math.floor(daysCount * -1) * -1;
    } else {
      daysCount = Math.floor(daysCount);
    }
    return daysCount;
  }
  initState(props) {
    const state = {
      lend: this.getLend(props.id)
    };
    return state;
  }
  renderReturnInDays(deadlineDate, returnDate) {
    const days = this.returnIn(returnDate, deadlineDate);

    if (days < 0) {
      return `(${days * -1} dni po terminie zwrotu)`;
    } else if (days > 0) {
      return `(${days} dni przed terminie zwrotu)`;
    }
    return '';
  }
  renderEditButton() {
    return (
      <AppIcon
        name="Pencil"
        width="24"
        height="24"
        fill="#FFFFFF"
      />
    );
  }

  renderRealReturnDate() {
    if (this.state.lend.status === 'completed') {
      return (
        <LendDetail
          label='Rzeczywista data zwrotu'
          text={this.getRealReturnDate()}
        />
      );
    }
    return null;
  }
  renderRemindTime() {
    if (this.state.lend.status !== 'completed') {
      return (
        <LendDetail
          label='Przypomnienie'
          text={this.getRemindTime()}
        />
      );
    }
    return null;
  }
  renderDetail(label, value) {
    return (
      <View style={[componentStyles.detail]}>
        <Text style={[componentStyles.label]}>{label}</Text>
        <Text style={[componentStyles.value]}>{value || ' '}</Text>
      </View>
    );
  }
  renderActionButtons() {
    const lend = { ...this.state.lend };
    return (
      <View
        style={componentStyles.buttons}
      >
        <Button
          text="Usuń"
          type="negative"
          buttonStyle={componentStyles.button}
          onPress={() => console.log('abc')}
        />
        <Button
          text="Przypomnij"
          buttonStyle={componentStyles.button}
          onPress={() => console.log(lend)}
        />
      </View>
    );
  }

  render() {
    const lend = { ...this.state.lend };
    return (
      <View
        style={[componentStyles.container]}
      >
        <NavBar
          title="Podgląd pożyczki"
          backButton
          rightButton={this.renderEditButton()}
          rightButtonOnPress={this.onPressEdit}
          rightButtonContainerStyle={[
            componentStyles.editButton
          ]}
        />
        <ScrollView style={[componentStyles.details]}>
          <LendDetail
            label='Data pożyczki'
            text={this.formatDate(lend.createdDate)}
          />
          <LendDetail
            label='Co pożyczyłeś/aś?'
            text={lend.name}
          />
          <LendDetail
            label='Kto pożyczył?'
            text={lend.person}
          />
          <LendDetail
            label='Na jak długo pożyczasz?'
            text={`${this.returnIn(lend.deadlineDate, lend.createdDate)} dni`}
          />
          <LendDetail
            label='Planowana data zwrotu'
            text={this.formatDate(lend.deadlineDate)}
          />
          {this.renderRealReturnDate()}
          {this.renderRemindTime()}
          <LendDetail
            label='Status'
            text={lend.status === 'completed' ? 'Oddane' : 'W trakcie'}
          />
          {this.renderActionButtons()}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {
    lends
  } = state.lends;

  return {
    lends
  };
};

export default connect(mapStateToProps, actions)(LendView);
