export const normalizeSum = sum => sum.toLocaleString('ru-RU', { minimumFractionDigits: 2 });

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

export const normalizePeriod = (month, year) => {
  const period = `${months[month + 1]} ${year}`;
  return period;
};
