export function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

export function getValueByKey(object, key) {
  return object[key];
}

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export const parseDate = text => {
  const arr = text.split(' ');
  const month = months.indexOf(arr[0]) + 1;
  const year = arr[2];
  return { month, year };
};

export const getCurrentPeriod = () => {
  const today = new Date();
  const month = today.getMonth;
  const year = today.getFullYear;
  return { month, year };
};

export const groupBy = (array, field) =>
  array.reduce((acc, element) => {
    if (acc.some(el => el[field] === element[field])) {
      // eslint-disable-next-line no-param-reassign
      acc.amount += element.amount;
    } else {
      acc.push(element);
    }
    return acc;
  }, []);
