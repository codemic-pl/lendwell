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
  console.log('deleteLend');
  const newLendsList = lends.filter((element) => element.id !== lendId);
  console.log(newLendsList);
  return {
    type: DELETE_LEND,
    payload: newLendsList
  };
};
