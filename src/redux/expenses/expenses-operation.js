import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExpensesAPI } from '../../servises/expensesApi';

export const fetchExpensesList = createAsyncThunk(
  'expenses/getExpenses',
  async (_, { rejectWithValue }) => {
    try {
      const expenses = await ExpensesAPI.fetchExpensesList();

      return expenses;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const createExpens = createAsyncThunk(
  'expenses/createExpens',
  async (expens, { rejectWithValue }) => {
    try {
      const data = await ExpensesAPI.createContact(expens);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteExpens = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await ExpensesAPI.deleteContact(id);

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const patchExpens = createAsyncThunk(
  'expenses/patchExpens',
  async (id, { rejectWithValue }) => {
    try {
      const data = await ExpensesAPI.patchContact(id);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
