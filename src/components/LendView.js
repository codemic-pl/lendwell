import React, { Component } from 'react';
import {
  Alert,
  ScrollView,
  Share,
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
  componentDidMount() {
    if (!this.props || !this.props.lendId ||
        !this.props.lends || !this.props.lends.length ||
        !this.getLend(this.props.lendId)) {
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
    Actions.editLend({ lendId: this.props.lendId });
  }

  onPressDelete() {
    const { lendId, lends } = this.props;
    this.props.deleteLend({
      lends,
      lendId
    });
    Actions.pop();
  }

  async onPressRemind() {
    try {
      const result = await Share.share({
        // TODO: CHANGE TEXT WHEN WILL BE AVAILABLE AT STORAGE
        message:
          'Lorem ipsum',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(
        'Błąd!',
        error.message,
        [
          { text: 'OK', onPress: () => Actions.pop() },
        ],
        { cancelable: false },
      );
      return false;
    }
  }
  onPressChangeStatus() {
    const { lendId, lends } = this.props;
    this.props.changeLendStatus({
      lends,
      lendId
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
    const Y = new Date(date).getFullYear();
    const M = new Date(date).getMonth() + 1;
    const D = new Date(date).getDate();
    return `${Y}-${M}-${D}`;
  }
  getRemindTime() {
    // TODO: get remind time
    return '5 dni przed planowaną datą zwrotu';
  }
  getRealReturnDate() {
    const lend = { ...this.getLend(this.props.lendId) };
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
    if (this.getLend(this.props.lendId).status === 'completed') {
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
          rightButtonOnPress={this.onPressEdit.bind(this)}
          rightButtonContainerStyle={[
            componentStyles.editButton
          ]}
        />
        <ScrollView style={[componentStyles.details]} />
      </View>
    );
  }

  render() {
    const { lendId } = this.props;
    const lend = this.getLend(lendId);
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
          rightButtonOnPress={this.onPressEdit.bind(this)}
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
    lends,
    editableLend
  } = state.lends;

  return {
    lends,
    editableLend
  };
};

export default connect(mapStateToProps, actions)(LendView);
