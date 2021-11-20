import axios from 'axios';

axios.defaults.baseURL = 'https://goit-kapusta.herokuapp.com/api';

export const fetchTransactionsList = async () => {
  const transactions = await axios.get('/transactions');
  return transactions.data.data.data;
};

export const fetchTransactionsTypesList = async transactionType => {
  const transactionsTypesList = await axios.get(`/transactions/${transactionType}`);
  return transactionsTypesList.data.data;
};
export const createTransaction = async (transactionType, transaction) => {
  const { data } = await axios.post(`/transactions/${transactionType}`, transaction);

  return data;
};

export const deleteTransaction = async transactionId => {
  await axios.delete(`/transactions/${transactionId}`);
};

export const setBalanceApi = balance =>
  axios
    .patch(`/balance`, { balance })
    .then(({ data }) => data)
    .catch(error => {
      throw error;
    });
