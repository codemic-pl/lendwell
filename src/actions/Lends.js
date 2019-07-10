import {
  SET_LENDS_SWIPER_INDEX,
  DELETE_LEND
} from './types';

export const setLendsSwiperUpdateIndex = (index) => {
  return {
    type: SET_LENDS_SWIPER_INDEX,
    payload: index
  };
};

export const deleteLend = ({ lends, lendId }) => {
  const newLendsList = lends.filter((element) => element.id !== lendId);
  return {
    type: DELETE_LEND,
    payload: newLendsList
  };
};
