// import { createSelector } from '@reduxjs/toolkit';

export const getExpenses = state => state.expenses.items;
console.log(getExpenses);
// export const getFilter = state => state.contacts.filter;
export const getIsLoading = state => state.expenses.isLoading;

// export const getVisibleContact = createSelector([getExpenses], (expenses, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return expenses.filter(expens=> expens.name.toLowerCase().includes(normalizedFilter));
// });
