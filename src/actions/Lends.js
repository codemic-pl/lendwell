import {
  SET_LENDS_SWIPER_INDEX
} from './types';

export const setLendsSwiperUpdateIndex = (index) => {
  return {
    type: SET_LENDS_SWIPER_INDEX,
    payload: index
  };
};
