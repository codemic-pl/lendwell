const getDateYMD = (someDate) => {
  const date = someDate || new Date();
  const Y = new Date(date).getFullYear();
  let M = new Date(date).getMonth() + 1;
  if (M < 10) {
    M = `0${M}`;
  }
  const D = new Date(date).getDate();
  return `${Y}-${M}-${D}`;
};

const formatDate = (someDate) => {
  const date = someDate || new Date();
  const Y = new Date(date).getFullYear();
  let M = new Date(date).getMonth() + 1;
  if (M < 10) {
    M = `0${M}`;
  }
  const D = new Date(date).getDate();
  return `${D}.${M}.${Y}`;
  // const date = someDate || new Date();
  // return new Date(date).toLocaleDateString('pl-PL');
};

export { getDateYMD, formatDate };
