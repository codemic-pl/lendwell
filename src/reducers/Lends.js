import { SET_LENDS_SWIPER_INDEX } from '../actions/types';

const INITIAL_STATE = {
  swiperIndex: 0,
  lends: [
    {
      status: 'active',
      name: 'Wkrętarka',
      person: 'Jan Kowalski',
      lendDate: new Date(),
      returnDate: new Date('2019-12-12')
    },
    {
      status: 'completed',
      name: 'Wkrętarka2',
      person: 'Jan Kowalski',
      lendDate: new Date(),
      returnDate: new Date('2019-10-10')
    },
    {
      status: 'completed',
      name: 'Wkrętarka3',
      person: 'Jan Kowalski',
      lendDate: new Date(),
      returnDate: new Date('2019-11-11')
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
