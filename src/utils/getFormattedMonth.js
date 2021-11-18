import { nanoid } from 'nanoid';

const formatter = Intl.DateTimeFormat('ru', { month: 'long' });

export const getFormattedMonth = data => {
  let obj = {};
  const result = [];
  if (data.length === 0) {
    for (let i = 0; i <= 6; i += 1) {
      obj = {
        id: nanoid(),
        month: '',
        total: '',
      };
      result.push(obj);
    }
    return result;
  }
  // eslint-disable-next-line array-callback-return
  data.map(({ totalResultAmount, reportMonth, reportYear }) => {
    const date = new Date(reportYear, reportMonth - 1);
    obj = {
      id: nanoid(),
      month: formatter.format(date).toUpperCase(),
      total: totalResultAmount,
    };
    result.push(obj);
  });
  return result;
};
