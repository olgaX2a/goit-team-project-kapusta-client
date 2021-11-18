import axios from 'axios';

axios.defaults.baseURL = 'http://goit-kapusta.herokuapp.com/api';

export const fetchTransactionsList = async () => {
  const transactions = await axios.get('/transactions');
  return transactions.data.data.data;
};

export const createTransaction = async (transactionType, transaction) => {
  const { data } = await axios.post(`/transactions/${transactionType}`, transaction);

  return data;
};

export const deleteTransaction = async transactionId => {
  await axios.delete(`/transactions/${transactionId}`);
};
