import {
  SET_LENDS_SWIPER_INDEX,
  SET_EDITABLE_LEND,
  DELETE_LEND,
  CHANGE_LEND_STATUS,
  ADD_LEND,
  EDIT_LEND
} from '../actions/types';

const INITIAL_STATE = {
  swiperIndex: 0,
  newLendTemplate: {
    status: 'active',
    name: '',
    person: '',
    createdDate: '',
    returnDate: null,
    deadlineDate: '',
    notificationBefore: 1800000 // 30 minutes in miliseconds
  },
  editableLend: {
    status: 'active',
    name: '',
    person: '',
    createdDate: '',
    returnDate: null,
    deadlineDate: '',
    notificationBefore: 1800000 // 30 minutes in miliseconds
  },
  lends: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_EDITABLE_LEND:
      return {
        ...state,
        editableLend: action.payload
      };
    case DELETE_LEND:
      return {
        ...state,
        lends: action.payload
      };
    case CHANGE_LEND_STATUS:
      return {
        ...state,
        lends: action.payload
      };
    case SET_LENDS_SWIPER_INDEX:
      return {
        ...state,
        swiperIndex: action.payload
      };
    case ADD_LEND:
      return {
        ...state,
        lends: [
          ...state.lends,
          action.payload
        ]
      };
    case EDIT_LEND:
      return {
        ...state,
        lends: action.payload
      };
    default:
      return state;
  }
};
