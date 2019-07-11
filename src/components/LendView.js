import React, { Component } from 'react';
import {
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
import {
  ACCENT_VERY_DARK_COLOR,
  ACTIVE_LEND_DARK_COLOR
} from '../assets/styles/common/Variables';

class LendView extends Component {
  state = this.initState(this.props);
  componentDidMount() {
    if (!this.props || !this.props.id ||
        !this.props.lends || !this.props.lends.length ||
        !this.getLend(this.props.id)) {
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
  }
  onPressEdit() {
    // TODO: Edit press
    console.log('onPressEdit');
  }
  onPressDelete() {
    const { lend, lends } = this.state;
    this.props.deleteLend({
      lends,
      lendId: lend.id
    });
    Actions.pop();
  }
  onPressRemind() {
    // TODO: Remind press
    console.log('onPressRemind');
  }
  onPressChangeStatus() {
    const { lends, lend } = this.state;
    this.props.changeLendStatus({
      lends,
      lendId: lend.id
    });
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
      daysCount = Math.ceil(daysCount * -1) * -1;
    } else {
      daysCount = Math.floor(daysCount);
    }
    return daysCount;
  }
  initState(props) {
    const state = {
      lend: this.getLend(props.id),
      lends: this.props.lends
    };
    return state;
  }
  renderReturnInDays(deadlineDate, returnDate) {
    let days = this.returnIn(returnDate, deadlineDate);
    let onTime = true;

    if (days < 0) {
      days *= -1;
      onTime = false;
    }

    if (days === 1) {
      return `(${days} dzień ${onTime ? 'przed terminem' : 'po terminie'} zwrotu)`;
    } else if (days > 0) {
      return `(${days} dni ${onTime ? 'przed terminem' : 'po terminie'} zwrotu)`;
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
    // TODO: Need add local push notifications, it's not needed in MVP
    return null;
    // if (this.state.lend.status !== 'completed') {
    //   return (
    //     <LendDetail
    //       label='Przypomnienie'
    //       text={this.getRemindTime()}
    //     />
    //   );
    // }
    // return null;
  }
  renderActionButtons() {
    return (
      <View
        style={componentStyles.buttons}
      >
        <Button
          text="Usuń"
          type="negative"
          buttonStyle={componentStyles.button}
          onPress={this.onPressDelete.bind(this)}
        />
        <Button
          text="Przypomnij"
          buttonStyle={componentStyles.button}
          onPress={this.onPressRemind.bind(this)}
        />
      </View>
    );
  }
  renderBlankScreen() {
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
        <ScrollView style={[componentStyles.details]} />
      </View>
    );
  }

  render() {
    const { lend } = this.state;
    if (!lend) {
      return this.renderBlankScreen();
    }
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
          <View
            style={componentStyles.status}
          >
            <LendDetail
              label='Status'
              text={lend.status === 'completed' ? 'Oddane' : 'W trakcie'}
              textColor={(lend.status === 'completed' ?
                        ACCENT_VERY_DARK_COLOR :
                        ACTIVE_LEND_DARK_COLOR)}
            />
            <Button
              text="Zmień"
              buttonStyle={componentStyles.statusButton}
              textStyle={componentStyles.statusButtonText}
              onPress={this.onPressChangeStatus.bind(this)}
            />
          </View>
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
