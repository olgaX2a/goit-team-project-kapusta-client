import { createAsyncThunk } from '@reduxjs/toolkit';
import { TransactionAPI } from '../../servises/transactionsAPI';

export const fetchExpensesList = createAsyncThunk(
  'expenses/getExpenses',
  async (_, { rejectWithValue }) => {
    try {
      const expenses = await TransactionAPI.fetchTransactionList();

      return expenses;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const createExpense = createAsyncThunk(
  'expenses/createExpense',
  async (expense, { rejectWithValue }) => {
    try {
      const data = await TransactionAPI.createTransaction(expense);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteExpense = createAsyncThunk(
  'expenses/deleteExpense',
  async (id, { rejectWithValue }) => {
    try {
      await TransactionAPI.deleteTransaction(id);

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const patchExpense = createAsyncThunk(
  'expenses/patchExpense',
  async (id, { rejectWithValue }) => {
    try {
      const data = await TransactionAPI.patchTransaction(id);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
