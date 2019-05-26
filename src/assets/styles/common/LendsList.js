import { StyleSheet } from 'react-native';
import { WINDOW_WIDTH, ACCENT_COLOR } from './Variables';

export default StyleSheet.create({
  itemsHolder: {
    flex: 1,
    alignSelf: 'stretch',
    paddingHorizontal: 15,
    paddingVertical: 24
  },
  noItemsHolder: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 15,
    alignItems: 'center'
  },
  noItemsText: {
    paddingTop: 50,
    fontSize: 15,
    fontFamily: 'oxygen',
    // fontWeight: 'bold',
    color: '#263844'
  }
});
