import axios from 'axios';
import { BASE_URL } from '../utils/url';
import { groupBy } from '../utils/helpers';

axios.defaults.baseURL = BASE_URL;

export const fetchCategoryReports = async category => {
  const response = axios.get('/categories/all', {
    params: {
      category,
    },
  });
  return response;
};

export const fetchByPeriodReports = async (month, year, transactionType) => {
  const response = axios.get('/categories', {
    params: {
      month,
      year,
      transactionType,
    },
    // transformResponse: [
    //   function (data) {
    //     /const

    //     return data;
    //   },
    // ],
  });
  return response;
};
