import short from 'short-uuid';
import {
  SET_LENDS_SWIPER_INDEX,
  SET_EDITABLE_LEND,
  DELETE_LEND,
  CHANGE_LEND_STATUS,
  ADD_LEND,
  EDIT_LEND
} from './types';

const getDateYMD = (someDate) => {
  const date = someDate || new Date();
  const Y = new Date(date).getFullYear();
  const M = new Date(date).getMonth() + 1;
  const D = new Date(date).getDate();
  return `${Y}-${M}-${D}`;
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

export const setEditableLend = (newLendTemplate, lendDetails) => {
  if (!lendDetails) {
    return null;
  }

  let editableLend = { ...newLendTemplate };

  if (lendDetails) {
    editableLend = { ...editableLend, ...lendDetails };
  }

  if (!editableLend.id) {
    editableLend.id = short.generate();
  }
  if (!editableLend.createdDate) {
    editableLend.createdDate = getDateYMD();
  }
  if (!editableLend.deadlineDate) {
    editableLend.deadlineDate = getDateYMD();
  }

  return {
    type: SET_EDITABLE_LEND,
    payload: editableLend
  };
};

export const addLend = (lend) => {
  return {
    type: ADD_LEND,
    payload: lend
  };
};

export const editLend = ({ lends, lend }) => {
  const newLendsList = [...lends];

  if (lend) {
    const lendArrayIndex = lends.findIndex((el) => el.id === lend.id);
    newLendsList[lendArrayIndex] = lend;
  }

  return {
    type: EDIT_LEND,
    payload: newLendsList
  };
};
