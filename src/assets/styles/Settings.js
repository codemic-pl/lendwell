import { StyleSheet } from 'react-native';
import {
  TEXT_COLOR,
  GRAY_COLOR,
  VERY_LIGHT_GRAY_COLOR
} from './common/Variables';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff'
  },
  settingsList: {
    flex: 1,
  },
  settingsListItem: {
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  settingsListItemLabel: {
    color: '#737373',
    fontFamily: 'oxygen',
    fontWeight: 'bold',
    fontSize: 17
  },
  copyrightHolder: {
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  codemicLogo: {}
});
