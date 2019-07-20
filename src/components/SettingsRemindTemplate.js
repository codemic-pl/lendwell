import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import {
  Button,
  Input,
  NavBar,
} from './common';
import { AlertHelper } from '../helpers/AlertHelper';
import * as actions from '../actions';
import componentStyles from '../assets/styles/AddLend';

class SettingsRemindTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = { remindTemplate: props.remindTemplateText || '' };
  }

  onRemindChanged(text) {
    this.setState({ remindTemplate: text });
  }

  onRemindSave() {
    if (!this.state || !this.state.remindTemplate) {
      AlertHelper.show('error', 'Błąd', 'Szablon nie może być pusty.');
    }
    this.props.setRemindTemplateText(this.state.remindTemplate);
    AlertHelper.show('success', 'Sukces', 'Szablon został zapisany.');
  }

  onVariablePress(variable) {
    const remindTemplate = this.state ? this.state.remindTemplate : '';
    this.onRemindChanged(`${remindTemplate}${variable} `);
  }

  render() {
    const { remindTemplate } = this.state;

    return (
      <View
        style={[componentStyles.container]}
      >
        <NavBar
          title="Szablon przypomnienia"
          backButton
        />
        <ScrollView style={[componentStyles.details]}>
          <Text style={[componentStyles.title]}>
            Edytuj lub stwórz własny szablon przypomnienia o pożyczce
          </Text>
          <Text style={[componentStyles.subtitle]}>
            Kliknij w poniższy przycisk, aby wstawić zmienną w treść.
          </Text>
          <View class={[componentStyles.variables]}>
            <Button
              text="Osoba (pożyczkobiorca)"
              buttonStyle={componentStyles.button}
              onPress={this.onVariablePress.bind(this, '{{osoba}}')}
            />
            <Button
              text="Rzecz (pożyczka)"
              buttonStyle={componentStyles.button}
              onPress={this.onVariablePress.bind(this, '{{rzecz}}')}
            />
            <Button
              text="Data pożyczki"
              buttonStyle={componentStyles.button}
              onPress={this.onVariablePress.bind(this, '{{datapozyczki}}')}
            />
            <Button
              text="Planowana data zwrotu"
              buttonStyle={componentStyles.button}
              onPress={this.onVariablePress.bind(this, '{{datazwrotu}}')}
            />
          </View>
          <Input
            placeholder="Cześć {{osoba}}. Pożyczyłem Ci {{rzecz}} dnia {{datapozyczki}}. Przypominam, że termin zwrotu to {{datazwrotu}}."
            numberOfLines={6}
            value={remindTemplate}
            onChangeText={this.onRemindChanged.bind(this)}
          />
          <Button
            text="Zapisz"
            onPress={this.onRemindSave.bind(this)}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {
    remindTemplateText
  } = state.defaults;

  return {
    remindTemplateText
  };
};

export default connect(mapStateToProps, actions)(SettingsRemindTemplate);
