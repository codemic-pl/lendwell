import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  items: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 24,
    // paddingBottom: 32, // when tabbar is relative
    paddingBottom: 128, // when tabbar is absolute
    alignItems: 'center'
  },
  container: {
    alignSelf: 'stretch',
    flex: 1
  },
  noItemsText: {
    paddingTop: 50,
    fontSize: 15,
    fontFamily: 'oxygen',
    // fontWeight: 'bold',
    color: '#263844'
  }
});
