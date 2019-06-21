import { StyleSheet } from 'react-native';
import {
  ACCENT_DARK_COLOR,
  ACTIVE_LEND_COLOR,
  TEXT_COLOR,
  LIGHT_GRAY_COLOR,
  VERY_LIGHT_GRAY_COLOR
} from './Variables';

export default StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: VERY_LIGHT_GRAY_COLOR
  },
  logo: {
    width: 48,
    height: 48,
    marginRight: 16,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ACCENT_DARK_COLOR
  },
  logoLendCompleted: {
    backgroundColor: ACTIVE_LEND_COLOR
  },
  content: {
    flex: 1
  },
  details: {
    flexDirection: 'row'
  },
  detail: {
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  detailPersonName: {
    flex: 1
  },
  detailText: {
    fontSize: 11,
    paddingLeft: 8,
    fontFamily: 'oxygen',
    color: LIGHT_GRAY_COLOR
  },
  lendNameHolder: {},
  lendName: {
    fontSize: 15,
    fontFamily: 'oxygen',
    color: TEXT_COLOR
  }
});
