import moment from 'moment';

const getDateYMD = (someDate) => {
  return moment(someDate).format('YYYY-MM-DD');
};

const formatDate = (someDate) => {
  return moment(someDate).format('DD.MM.YYYY');
};

export { getDateYMD, formatDate };
