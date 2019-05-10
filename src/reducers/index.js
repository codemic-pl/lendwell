import { combineReducers } from 'redux';
import Lends from './Lends';
import Defaults from './Defaults';

export default combineReducers({
  lends: Lends,
  defaults: Defaults
});
