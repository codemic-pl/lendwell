import {
  FIRST_APP_LAUNCH
} from '../actions/types';

const INITIAL_STATE = {
  firstLaunch: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIRST_APP_LAUNCH:
      return action.payload;
    default:
      return state;
  }
};
