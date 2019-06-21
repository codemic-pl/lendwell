import short from 'short-uuid';
import { SET_LENDS_SWIPER_INDEX } from '../actions/types';

const INITIAL_STATE = {
  swiperIndex: 0,
  lends: [
    {
      status: 'active',
      id: short.generate(),
      name: 'Przedłużacz samochodowy',
      person: 'Zbigniew Szymański',
      lendDate: new Date(),
      returnDate: new Date('2019-07-20')
    },
    {
      status: 'active',
      id: short.generate(),
      name: 'Ładowarka samochodowa do telefonu OnePlus 3T Pro Majster Tiger',
      person: 'Mieczysław Schwichtenberg',
      lendDate: new Date(),
      returnDate: new Date('2019-07-20')
    },
    {
      status: 'completed',
      id: short.generate(),
      name: 'Wyrzynarka',
      person: 'Bartek Kreft',
      lendDate: new Date(),
      returnDate: new Date('2019-07-18')
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LENDS_SWIPER_INDEX:
      return {
        ...state,
        swiperIndex: action.payload
      };
    default:
      return state;
  }
};
