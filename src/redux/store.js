import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';
import reportReducer from './reports/slice';
import transactionsSlice from './transactions/transactions-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    reports: reportReducer,
    transactions: transactionsSlice,
  },
  middleware: [thunk, logger],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
