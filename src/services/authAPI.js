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
  await axios.get('/users/logout');
};

// WAITING FOR ENDPOINT FROM BACKEND

// export const fetchCurrentUser = async (_, thunkAPI) => {
//   const response = axios.get('/users/current');
//   return response;
// };
