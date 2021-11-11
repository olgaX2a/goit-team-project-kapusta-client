import { createSlice } from '@reduxjs/toolkit';
import { fetchExpensesList, createExpense, deleteExpense } from './expenses-operation';

const expensesSlice = createSlice({
  name: 'expenses',

  initialState: {
    items: [],
    type: 'expense',
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
    [fetchExpensesList.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchExpensesList.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchExpensesList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = 'Error';
    },

    [createExpense.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.isLoading = false;
      state.error = null;
    },
    [createExpense.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [createExpense.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = 'Error';
    },
    [deleteExpense.fulfilled]: (state, action) => {
      state.items = state.items.filter(expens => expens.id !== action.payload);
    },
  },
});
// export const { changeFilter } = ExpensSlice.actions;
export default expensesSlice.reducer;
