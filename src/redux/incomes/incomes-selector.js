// import { createSelector } from '@reduxjs/toolkit';

export const getIncomes = state => state.incomes.items;

// export const getFilter = state => state.contacts.filter;
export const getIsLoading = state => state.incomes.isLoading;

// export const getVisibleContact = createSelector([getExpenses], (expenses, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return expenses.filter(expens=> expens.name.toLowerCase().includes(normalizedFilter));
// });
