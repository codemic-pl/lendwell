import { SET_LENDS_SWIPER_INDEX } from '../actions/types';

const INITIAL_STATE = {
  swiperIndex: 0
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
