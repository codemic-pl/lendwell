import {
  FIRST_APP_LAUNCH,
  SET_STATUSBAR_HEIGHT
} from './types';

export const setFirstAppLaunch = (value) => {
  return {
    type: FIRST_APP_LAUNCH,
    payload: !!value
  };
};

export const setStatusBarHeight = (height) => {
  return {
    type: SET_STATUSBAR_HEIGHT,
    payload: height
  };
};
