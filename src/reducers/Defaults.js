import {
  FIRST_APP_LAUNCH,
  SET_STATUSBAR_HEIGHT,
  SET_REMIND_TEMPLATE_TEXT
} from '../actions/types';

const INITIAL_STATE = {
  firstLaunch: true,
  statusBarHeight: 0,
  remindTemplateText: 'Cześć {{osoba}}. Pożyczyłem Ci {{rzecz}} dnia {{datapozyczki}}. Przypominam, że termin zwrotu to {{datazwrotu}}.'
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
    case SET_REMIND_TEMPLATE_TEXT:
      return {
        ...state,
        remindTemplateText: action.payload
      };
    default:
      return state;
  }
};
