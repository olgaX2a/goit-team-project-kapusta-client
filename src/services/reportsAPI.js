import axios from 'axios';
import { BASE_URL } from '../utils/url';

axios.defaults.baseURL = BASE_URL;

export const fetchCategoriesReports = async (transactionType, month, year) => {
  const response = axios.get('/categories');
  return response;
};
