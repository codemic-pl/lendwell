import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  editButton: {
    width: 34,
    height: 34,
    right: 10
  },
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
