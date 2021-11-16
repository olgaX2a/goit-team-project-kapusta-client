import axios from 'axios';

axios.defaults.baseURL = 'http://goit-kapusta.herokuapp.com/api';

export const fetchTransactionsList = async () => {
  const { data } = await axios.get('/transactions');

  return data;
};

export const fetchIncomesList = async income => {
  const incomes = await axios.get(`/transactions/${income}`);

  return incomes;
};

export const fetchExpensesList = async expense => {
  const expenses = await axios.get(`/transactions/${expense}`);

  return expenses;
};

export const createTransaction = async (transactionType, transaction) => {
  console.log(transactionType);
  const { data } = await axios.post(`/transactions/${transactionType}`, transaction);

  return data;
};

export const deleteTransaction = async transactionId => {
  await axios.delete(`/transactions/${transactionId}`);
};

export const patchTransaction = async transOperationId => {
  const { data } = await axios.patch(`/transactions/${transOperationId}`);
  return data;
};
