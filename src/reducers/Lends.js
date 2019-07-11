import short from 'short-uuid';
import {
  SET_LENDS_SWIPER_INDEX,
  DELETE_LEND,
  CHANGE_LEND_STATUS
} from '../actions/types';

const INITIAL_STATE = {
  swiperIndex: 0,
  lends: [
    {
      status: 'active',
      id: short.generate(),
      name: 'Ładowarka samochodowa do telefonu OnePlus 3T Pro Majster Tiger',
      person: 'Zbigniew Szymański',
      createdDate: '2019-07-01',
      returnDate: null,
      deadlineDate: '2019-07-10',
      notificationBefore: 1800000 // 30 minutes in miliseconds
    },
    {
      status: 'active',
      id: short.generate(),
      name: 'Kolejny test na długie nazwy osób i rzeczy, które pożyczono',
      person: 'Mieczysław Schwichtenberg',
      createdDate: '2019-07-01',
      returnDate: null,
      deadlineDate: '2019-07-19',
      notificationBefore: 1800000 // 30 minutes in miliseconds
    },
    {
      status: 'active',
      id: short.generate(),
      name: 'Młotek',
      person: 'Ania',
      createdDate: '2019-07-01',
      returnDate: null,
      deadlineDate: '2019-07-05',
      notificationBefore: 1800000 // 30 minutes in miliseconds
    },
    {
      status: 'active',
      id: short.generate(),
      name: 'Cukier',
      person: 'Bartek',
      createdDate: '2019-07-01',
      returnDate: null,
      deadlineDate: '2019-07-12',
      notificationBefore: 1800000 // 30 minutes in miliseconds
    },
    {
      status: 'completed',
      id: short.generate(),
      name: 'Wyrzynarka',
      person: 'Bartek',
      createdDate: '2019-07-01',
      returnDate: '2019-07-05',
      deadlineDate: '2019-07-09',
      notificationBefore: 1800000 // 30 minutes in miliseconds
    },
    {
      status: 'completed',
      id: short.generate(),
      name: 'Piła',
      person: 'Piotr',
      createdDate: '2019-07-01',
      returnDate: '2019-07-09',
      deadlineDate: '2019-07-09',
      notificationBefore: 1800000 // 30 minutes in miliseconds
    },
    {
      status: 'completed',
      id: short.generate(),
      name: 'Żelki',
      person: 'Klaudia',
      createdDate: '2019-07-01',
      returnDate: '2019-09-07',
      deadlineDate: '2019-09-07',
      notificationBefore: 1800000 // 30 minutes in miliseconds
    },
    {
      status: 'completed',
      id: short.generate(),
      name: 'Kabel HDMI',
      person: 'Mariusz',
      createdDate: '2019-06-01',
      returnDate: '2019-07-10',
      deadlineDate: '2019-06-19',
      notificationBefore: 1800000 // 30 minutes in miliseconds
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
