import axios from 'axios';

export const fetchTransaction = async type => {
  const { data } = await axios.get(`/transactions/${type}`);
  return data.totalAmountByMonth;
};
