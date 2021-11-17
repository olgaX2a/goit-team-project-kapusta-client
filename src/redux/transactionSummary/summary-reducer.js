import { createReducer, combineReducers } from '@reduxjs/toolkit';
import summaryActions from './summary-actions';

const summaryReducer = createReducer([], {
  [summaryActions.getSummarySuccess]: (_, { payload }) => payload,
});

const summaryIsLoading = createReducer([], {
  [summaryActions.getSummaryError]: () => false,
  [summaryActions.getSummaryRequest]: () => true,
  [summaryActions.getSummarySuccess]: () => false,
});

export default combineReducers({
  summaryIsLoading,
  summaryReducer,
});
