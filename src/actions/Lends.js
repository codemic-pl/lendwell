import {
  SET_LENDS_SWIPER_INDEX,
  DELETE_LEND,
  CHANGE_LEND_STATUS
} from './types';

const getDateYMD = (someDate) => {
  const date = someDate || new Date();
  return `${new Date(date).getFullYear()}-
          ${new Date(date).getMonth() + 1}-
          ${new Date(date).getDate()}`;
};

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

export const changeLendStatus = ({ lends, lendId }) => {
  const newLendsList = [...lends];
  const lendArrayIndex = lends.findIndex((el) => el.id === lendId);
  if (newLendsList[lendArrayIndex].status === 'completed') {
    newLendsList[lendArrayIndex].status = 'active';
    newLendsList[lendArrayIndex].returnDate = null;
  } else {
    newLendsList[lendArrayIndex].status = 'completed';
    newLendsList[lendArrayIndex].returnDate = getDateYMD();
  }
  return {
    type: CHANGE_LEND_STATUS,
    payload: newLendsList
  };
};
