import { createAction } from '@reduxjs/toolkit';

const getSummaryRequest = createAction('summary/request');
const getSummarySuccess = createAction('summary/success');
const getSummaryError = createAction('summary/error');

export default {
  getSummaryRequest,
  getSummaryError,
  getSummarySuccess,
};
