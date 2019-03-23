import { combineReducers } from 'redux';
import lends from './Lends';
import defaults from './Defaults';

export default combineReducers({
  lends,
  defaults
});
