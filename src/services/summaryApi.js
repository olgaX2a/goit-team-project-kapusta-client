import axios from 'axios';

export const fetchTransaction = async type => {
  const { data } = await axios.get(`/transactions/${type}`);
  console.log(data.totalAmountByMonth);
  return data.totalAmountByMonth;
};
