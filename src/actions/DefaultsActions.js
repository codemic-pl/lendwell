// import { Actions } from 'react-native-router-flux';
import {
  FIRST_APP_LAUNCH,
  SET_STATUSBAR_HEIGHT
} from './types';

export const endOnboarding = (dispatch) => {
  dispatch({
    type: FIRST_APP_LAUNCH,
    payload: true
  });
  //Actions.loginForm();?
  //Actions.home();?
};

export const setStatusBarHeight = (height) => {
  return {
    type: SET_STATUSBAR_HEIGHT,
    payload: height
  };
};
