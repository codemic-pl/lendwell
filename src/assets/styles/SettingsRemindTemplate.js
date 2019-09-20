import { StyleSheet } from 'react-native';
import {
  ACCENT_COLOR
} from './common/Variables';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  details: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 18,
    backgroundColor: '#ffffff'
  },
  title: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#737373',
    fontFamily: 'oxygen'
  },
  subtitle: {
    marginTop: 8,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: 'bold',
    color: '#737373',
    fontFamily: 'oxygen'
  },
  variables: {
    marginTop: 16,
    marginBottom: 8,
    marginHorizontal: -4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  variableButton: {
    backgroundColor: ACCENT_COLOR,
    minHeight: 30,
    borderRadius: 15,
    margin: 4
  },
  variableText: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'oxygen',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  button: {
    marginTop: 16,
    alignSelf: 'center'
  }
});
