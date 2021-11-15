/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import transactionOperations from './transactions-operations';

const transactionsSlice = createSlice({
  name: 'transactions',

  initialState: {
    items: [],
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
    [transactionOperations.fetchTransactionsList.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [transactionOperations.fetchTransactionsList.pending]: (state, action) => {
      state.isLoading = true;
    },
    [transactionOperations.fetchTransactionsList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = 'Error';
    },
    [transactionOperations.fetchIncomesList.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [transactionOperations.fetchIncomesList.pending]: (state, action) => {
      state.isLoading = true;
    },
    [transactionOperations.fetchIncomesList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = 'Error';
    },
    [transactionOperations.fetchIncomesList.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [transactionOperations.fetchExpensesList.pending]: (state, action) => {
      state.isLoading = true;
    },
    [transactionOperations.fetchExpensesList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = 'Error';
    },

    // [createIncome.fulfilled]: (state, action) => {
    //   state.items = [...state.items, action.payload];
    //   state.isLoading = false;
    //   state.error = null;
    // },
    // [createIncome.pending]: (state, action) => {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // [createIncome.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = 'Error';
    // },
    // [createExpense.fulfilled]: (state, action) => {
    //   state.items = [...state.items, action.payload];
    //   state.isLoading = false;
    //   state.error = null;
    // },
    // [createExpense.pending]: (state, action) => {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // [createExpense.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = 'Error';
    // },

    [transactionOperations.deleteTransaction.fulfilled]: (state, action) => {
      state.items = state.items.filter(transaction => transaction.id !== action.payload);
    },
  },
});
// export const { changeFilter } = TransactionSlice.actions;
export default transactionsSlice.reducer;
