import { createSelector } from '@reduxjs/toolkit';

const getTransactions = state => state.transactions.items;
const getIsLoading = state => state.transaction.isLoading;

const getExpenses = createSelector(getTransactions, transactions =>
  transactions.filter(transaction => transaction.transactionType === 'expense'),
);

const getIncomes = createSelector(getTransactions, transactions =>
  transactions.filter(transaction => transaction.transactionType === 'income'),
);

const transactionSelectors = {
  getTransactions,
  getIsLoading,
  getExpenses,
  getIncomes,
};

export default transactionSelectors;
