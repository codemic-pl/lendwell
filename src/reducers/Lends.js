import short from 'short-uuid';
import {
  SET_LENDS_SWIPER_INDEX,
  DELETE_LEND
} from '../actions/types';

const INITIAL_STATE = {
  swiperIndex: 0,
  lends: [
    {
      status: 'active',
      id: short.generate(),
      name: 'Przedłużacz samochodowy',
      person: 'Zbigniew Szymański',
      createdDate: new Date(),
      returnDate: null,
      deadlineDate: new Date('2019-07-10'),
      notificationBefore: 1800000 // 30 minutes in miliseconds
    },
    {
      status: 'active',
      id: short.generate(),
      name: 'Ładowarka samochodowa do telefonu OnePlus 3T Pro Majster Tiger',
      person: 'Mieczysław Schwichtenberg',
      createdDate: new Date(),
      returnDate: null,
      deadlineDate: new Date('2019-07-19'),
      notificationBefore: 1800000 // 30 minutes in miliseconds
    },
    {
      status: 'active',
      id: short.generate(),
      name: 'Ładowarka samochodowa do telefonu OnePlus 3T Pro Majster Tiger',
      person: 'Mieczysław Schwichtenberg',
      createdDate: new Date(),
      returnDate: null,
      deadlineDate: new Date('2019-07-09'),
      notificationBefore: 1800000 // 30 minutes in miliseconds
    },
    {
      status: 'active',
      id: short.generate(),
      name: 'Ładowarka samochodowa do telefonu OnePlus 3T Pro Majster Tiger',
      person: 'Mieczysław Schwichtenberg',
      createdDate: new Date(),
      returnDate: null,
      deadlineDate: new Date('2019-04-19'),
      notificationBefore: 1800000 // 30 minutes in miliseconds
    },
    {
      status: 'completed',
      id: short.generate(),
      name: 'Wyrzynarka',
      person: 'Bartek Kreft',
      createdDate: new Date(),
      returnDate: new Date('2019-07-18'),
      deadlineDate: new Date('2019-07-19'),
      notificationBefore: 1800000 // 30 minutes in miliseconds
    },
    {
      status: 'completed',
      id: short.generate(),
      name: 'Wyrzynarka',
      person: 'Bartek Kreft',
      createdDate: new Date(),
      returnDate: new Date('2019-07-18'),
      deadlineDate: new Date('2019-07-17'),
      notificationBefore: 1800000 // 30 minutes in miliseconds
    },
    {
      status: 'completed',
      id: short.generate(),
      name: 'Wyrzynarka',
      person: 'Bartek Kreft',
      createdDate: new Date(),
      returnDate: new Date('2019-09-18'),
      deadlineDate: new Date('2019-07-19'),
      notificationBefore: 1800000 // 30 minutes in miliseconds
    },
    {
      status: 'completed',
      id: short.generate(),
      name: 'Wyrzynarka',
      person: 'Bartek Kreft',
      createdDate: new Date(),
      returnDate: new Date('2019-07-21'),
      deadlineDate: new Date('2019-07-19'),
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
    case SET_LENDS_SWIPER_INDEX:
      return {
        ...state,
        swiperIndex: action.payload
      };
    default:
      return state;
  }
};
