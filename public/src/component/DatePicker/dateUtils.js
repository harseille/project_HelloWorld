import store from '../../store/store.js';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const convertDateStringToDate = date => (typeof date === 'string' ? new Date(date) : date);

const getFormattedDate = date => {
  const _date = convertDateStringToDate(date);
  const format = n => (n < 10 ? '0' + n : n + '');
  return `${_date.getFullYear()}-${format(_date.getMonth() + 1)}-${format(_date.getDate())}`;
};

const getFormattedDateMMDDDAY = date => {
  const _date = convertDateStringToDate(date);
  const format = n => (n < 10 ? '0' + n : n + '');
  return `${format(_date.getMonth() + 1)}.${format(_date.getDate())} ${days[_date.getDay()]}`;
};

const getMoveDate = (date, digit) => {
  const _date = convertDateStringToDate(date);
  return new Date(_date.getFullYear(), _date.getMonth(), _date.getDate() + digit);
};

// const getNextDate = (date, ) => {
//   const _date = convertDateStringToDate(date);
//   return new Date(_date.getFullYear(), _date.getMonth(), _date.getDate() + 1);
// };

export { getFormattedDate, getFormattedDateMMDDDAY, convertDateStringToDate, getMoveDate };
