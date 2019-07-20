import {
  FIRST_APP_LAUNCH,
  SET_STATUSBAR_HEIGHT,
  SET_REMIND_TEMPLATE_TEXT
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

export const setRemindTemplateText = (text) => {
  return {
    type: SET_REMIND_TEMPLATE_TEXT,
    payload: text
  };
};
