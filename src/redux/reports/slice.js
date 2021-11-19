import { createSlice } from '@reduxjs/toolkit';
import { getPeriodReports } from './operations';
import { groupBy, getPeriod, sortBy } from '../../utils/helpers';
import { EXPENSE } from '../../utils/transTypes';

const chatFilter = (state, payload) => {
  const filteredByCat = state.data.filter(el => el.category === payload);
  const grouped = groupBy(filteredByCat, 'description');
  return grouped
    .map(el => ({
      description: el.description,
      total: el.amount,
    }))
    .sort(sortBy('total'));
};

const initialState = {
  data: [],
  groupedByCategory: [],
  isLoading: false,
  error: false,
  chart: [],
  income: 0,
  expense: 0,
  period: [],
  type: EXPENSE,
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    filter(state, { payload }) {
      state.chart = chatFilter(state, payload);
    },
  },
  extraReducers: {
    [getPeriodReports.fulfilled](state, { payload }) {
      state.data = payload.allTransactionsByTypeForMonth;
      state.groupedByCategory = groupBy(payload.allTransactionsByTypeForMonth, 'category');
      state.income = payload.totalAmountTransactionsByReportMonth.totalIncome;
      state.expense = payload.totalAmountTransactionsByReportMonth.totalExpense;
      state.period = getPeriod(payload.allTransactionsByUser);
      state.chart = [];
      state.isLoading = false;
      state.error = false;
    },
    [getPeriodReports.pending](state) {
      state.isLoading = true;
      state.error = false;
      state.chart = [];
    },
    [getPeriodReports.rejected](state) {
      state.isLoading = false;
      state.chart = [];
      state.error = true;
    },
  },
});

export const { filter } = reportSlice.actions;
const reportReducer = reportSlice.reducer;

export default reportReducer;
