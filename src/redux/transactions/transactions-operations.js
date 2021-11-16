import { createAsyncThunk } from '@reduxjs/toolkit';
import * as TransactionAPI from '../../services/transactionsAPI';

const fetchTransactionsList = createAsyncThunk(
  'transactions/getTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const transactions = await TransactionAPI.fetchTransactionsList();

      return transactions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const createTransaction = createAsyncThunk(
  'transactions/createTransaction',
  async (transaction, { rejectWithValue }) => {
    try {
      const data = await TransactionAPI.createTransaction(transaction.transactionType, transaction);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
const deleteTransaction = createAsyncThunk(
  'transaction/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      await TransactionAPI.deleteTransaction(id);

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
const transactionOperations = {
  fetchTransactionsList,
  createTransaction,
  deleteTransaction,
};

export default transactionOperations;
