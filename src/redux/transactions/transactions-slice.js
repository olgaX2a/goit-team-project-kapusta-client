import { createSlice } from '@reduxjs/toolkit';
import transactionOperations from './transactions-operations';

const transactionsSlice = createSlice({
  name: 'transactions',

  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

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
    [transactionOperations.createTransaction.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.isLoading = false;
      state.error = null;
    },
    [transactionOperations.createTransaction.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [transactionOperations.createTransaction.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = 'Error';
    },
    [transactionOperations.deleteTransaction.fulfilled]: (state, action) => {
      state.items = state.items.filter(transaction => transaction.id !== action.payload);
    },
  },
});

export default transactionsSlice.reducer;
