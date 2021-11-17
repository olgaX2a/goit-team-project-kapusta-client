import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import * as reportsAPI from '../../services/reportsAPI';

export const getByCategory = createAsyncThunk(
  'reports/getCategoryReport',
  async (category, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await reportsAPI.fetchCategoryReports(category);
      return data;
    } catch (error) {
      toast.error('Ой, что-то пошло не так.');
      return rejectWithValue(error.message);
    }
  },
);

export const getPeriodReports = createAsyncThunk(
  'reports/getPeriodReports',
  async (reportParams, { rejectWithValue }) => {
    const { month, year, transactionType } = reportParams;
    try {
      const { data } = await reportsAPI.fetchByPeriodReports(month, year, transactionType);
      console.log(`data 🚀`, data);
      const collection = data.allTransactionsByTypeForMonth;
      return collection;
    } catch (error) {
      toast.error('Ой, что-то пошло не так.');
      return rejectWithValue(error.message);
    }
  },
);
