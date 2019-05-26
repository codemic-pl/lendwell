import { StyleSheet } from 'react-native';
import { ACCENT_DARK_COLOR, ACTIVE_LEND_COLOR, TEXT_COLOR } from './Variables';

export default StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center'
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
    paddingRight: 16
  },
  detailName: {
    fontSize: 11,
    fontFamily: 'oxygen',
    color: '#a3aaad'
  },
  lendNameHolder: {},
  lendName: {
    fontSize: 15,
    fontFamily: 'oxygen',
    color: TEXT_COLOR
  }
});
