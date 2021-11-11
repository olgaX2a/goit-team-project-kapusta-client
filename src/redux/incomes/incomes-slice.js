import { createSlice } from '@reduxjs/toolkit';
import { fetchIncomesList, createIncome, deleteIncome } from './incomes-operation';

const incomesSlice = createSlice({
  name: 'incomes',

  initialState: {
    items: [],
    type: 'income',
    // filter: '',
    isLoading: false,
    error: null,
  },
  //   reducers: {
  //     changeFilter: (state, action) => {
  //       state.filter = action.payload;
  //     },
  //   },
  extraReducers: {
    [fetchIncomesList.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchIncomesList.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchIncomesList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = 'Error';
    },

    [createIncome.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.isLoading = false;
      state.error = null;
    },
    [createIncome.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [createIncome.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = 'Error';
    },
    [deleteIncome.fulfilled]: (state, action) => {
      state.items = state.items.filter(income => income.id !== action.payload);
    },
  },
});
// export const { changeFilter } = ExpensSlice.actions;
export default incomesSlice.reducer;
