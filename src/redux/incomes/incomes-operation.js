import { createAsyncThunk } from '@reduxjs/toolkit';
import { TransactionAPI } from '../../servises/transactionsAPI';

export const fetchIncomesList = createAsyncThunk(
  'incomes/getIncomes',
  async (_, { rejectWithValue }) => {
    try {
      const incomes = await TransactionAPI.fetchTransactionList();

      return incomes;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const createIncome = createAsyncThunk(
  'incomes/createIncome',
  async (income, { rejectWithValue }) => {
    try {
      const data = await TransactionAPI.createTransaction(income);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteIncome = createAsyncThunk(
  'incomes/deleteIncome',
  async (id, { rejectWithValue }) => {
    try {
      await TransactionAPI.deleteTransaction(id);

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const patchIncome = createAsyncThunk(
  'incomes/patchIncome',
  async (id, { rejectWithValue }) => {
    try {
      const data = await TransactionAPI.patchTransaction(id);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
