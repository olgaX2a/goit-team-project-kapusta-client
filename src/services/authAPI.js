import axios from 'axios';

axios.defaults.baseURL = 'https://goit-kapusta.herokuapp.com/api';

export const register = async credentials => {
  const response = await axios.post('/users/registration', credentials);
  return response;
};

export const login = async credentials => {
  const response = await axios.post('/users/login', credentials);
  return response;
};

export const logout = async () => {
  await axios.post('/users/logout');
};

export const fetchCurrentUser = async () => {
  const response = axios.get('/users/current');
  return response;
};

export const setBalance = async balance => {
  const response = await axios.patch('/users/balance', balance);
  return response;
};
