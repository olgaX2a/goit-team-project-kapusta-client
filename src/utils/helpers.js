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
  const month = months.indexOf(arr[0]);
  const year = arr[2];
  return { month, year };
};

export const getCurrentPeriod = () => {
  const today = new Date();
  const month = today.getMonth;
  const year = today.getFullYear;
  return { month, year };
};

export const stringifyDate = dateObj => {
  const { month, year } = dateObj;
  const monthString = months[month + 1];
  return `${monthString} ${year}`;
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

export const getPeriod = data => {
  const periods = data.map(({ year, month }) => {
    const date = new Date(`${year}-${month}-01`);
    console.log(`date`, date);
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
  console.log(`intervalForCarousel`, intervalForCarousel);
  return intervalForCarousel;
};
