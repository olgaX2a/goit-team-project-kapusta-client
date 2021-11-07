import { configureStore } from '@reduxjs/toolkit';

// reducer: {
//   auth: persistReducer(authPersistConfig, authReducer),
//   expenses: expensesReducer,
//   incomes: incomsesReduser,
// },
export const store = configureStore({
  reducer: {},
});

// const expensesSlice = createSlice({
//   name: 'expenses',

//   initialState: {
//     categories: [],
//     sum: [],
//     date: [],
//     descGoods: [],
//     filter: '',
//     isLoading: false,
//     error: null,
//   },

// const incomesSlice = createSlice({
//   name: 'incomes',

//   initialState: {
//     categories: [],
//     sum: [],
//     date: [],
//     descIncomes: [],
//     filter: '',
//     isLoading: false,
//     error: null,
//   },
