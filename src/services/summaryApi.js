import axios from 'axios';

export const fetchTransaction = async () => {
  const { data } = await axios.get('/transactions/expense');
  return data.totalAmountByMonth;
};
