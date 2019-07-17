import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  // Image,
  Linking
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import componentStyles from '../assets/styles/Settings';

// const codemicLogo = require('../assets/images/codemic.png');

class Settings extends Component {
  openUrl(url) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Don't know how to open URI: ${this.props.url}`);
      }
    });
  }

  render() {
    return (
      <View style={componentStyles.container}>
        <View style={componentStyles.settingsList}>
          <TouchableOpacity
            onPress={() => { Actions.settingsRemindLend(); }}
            style={componentStyles.settingsListItem}
          >
            <Text style={componentStyles.settingsListItemLabel}>Szablon przypomnienia</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { Actions.tutorial(); }}
            style={componentStyles.settingsListItem}
          >
            <Text style={componentStyles.settingsListItemLabel}>Wprowadzenie</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { this.openUrl('https://lendwell.pl'); }}
            style={componentStyles.settingsListItem}
          >
            <Text style={componentStyles.settingsListItemLabel}>Zgłoś błąd</Text>
          </TouchableOpacity>
        </View>
        {/*<View style={componentStyles.copyrightHolder}>
          <Image style={componentStyles.codemicLogo} source={codemicLogo} />
        </View>*/}
      </View>
    );
  }
}

const mapStateToProps = () => {
  return {
  };
};

export default connect(mapStateToProps, actions)(Settings);
