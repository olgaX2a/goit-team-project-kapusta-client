import eachMonthOfInterval from 'date-fns/eachMonthOfInterval';
import min from 'date-fns/min';
import format from 'date-fns/format';

export function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

export function getValueByKey(object, key) {
  return object[key];
}

const months = [
  'январь',
  'февраль',
  'март',
  'апрель',
  'май',
  'июнь',
  'июль',
  'август',
  'сентябрь',
  'октябрь',
  'ноябрь',
  'декабрь',
];

export const parseDate = text => {
  const arr = text.split(' ');
  const month = months.indexOf(arr[0]) + 1;
  const year = Number(arr[1]);
  return { month, year };
};

export const getCurrentPeriod = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  console.log(`month`, month);
  return { month, year };
};

export const stringifyDate = dateObj => {
  const { month, year } = dateObj;
  const monthString = months[month + 1];
  return `${monthString} ${year}`;
};

export const groupBy = (array, field) =>
  array.reduce((acc, element) => {
    const accumulated = acc.find(el => el[field] === element[field]);
    if (accumulated) {
      console.log(`accumulated`, accumulated);
      accumulated.amount += element.amount;
    } else {
      const newEl = { [field]: element[field], amount: element.amount };
      console.log(`newEl`, newEl);
      acc.push(newEl);
    }
    return acc;
  }, []);

export const getPeriod = data => {
  const periods = data.map(({ year, month }) => {
    const date = new Date(`${year}-${month}-01`);
    return date.valueOf();
  });
  const end = new Date();
  const start = min(periods);

  const interval = eachMonthOfInterval({
    start,
    end,
  });

  const options = { year: 'numeric', month: 'long' };
  const intervalForCarousel = interval.map(el =>
    el.toLocaleDateString('ru', options).replace(' г.', ''),
  );
  return intervalForCarousel.reverse();
};
