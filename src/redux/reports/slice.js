import { createSlice } from '@reduxjs/toolkit';
import { getPeriodReports } from './operations';
import { groupBy } from '../../utils/helpers';

const chatFilter = (state, payload) => {
  const filteredByCat = state.data.filter(el => el.category === payload);
  const grouped = groupBy(filteredByCat, 'description');
  return grouped.map(el => ({
    description: el.description,
    total: el.amount,
  }));
};

const initialState = {
  data: [],
  isLoading: false,
  error: false,
  chart: [],
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
      state.data = groupBy(payload, 'category');
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
      state.error = true;
    },
  },
});

export const { filter } = reportSlice.actions;
const reportReducer = reportSlice.reducer;

export default reportReducer;
