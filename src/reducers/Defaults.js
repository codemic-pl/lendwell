import {
  FIRST_APP_LAUNCH,
  SET_STATUSBAR_HEIGHT
} from '../actions/types';

const INITIAL_STATE = {
  firstLaunch: true,
  statusBarHeight: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_STATUSBAR_HEIGHT:
      return {
        ...state,
        statusBarHeight: action.payload
      };
    case FIRST_APP_LAUNCH:
      return {
        ...state,
        firstLaunch: action.payload
      };
    default:
      return state;
  }
};
