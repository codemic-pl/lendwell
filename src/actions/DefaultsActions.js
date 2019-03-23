import { Actions } from 'react-native-router-flux';
import {
  FIRST_APP_LAUNCH
} from './types';

export const endOnboarding = (dispatch) => {
  dispatch({
    type: FIRST_APP_LAUNCH,
    payload: true
  });
  //Actions.loginForm();?
  //Actions.home();?
};
