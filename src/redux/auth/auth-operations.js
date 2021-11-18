import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import * as authAPI from '../../services/authAPI';

axios.defaults.baseURL = 'https://goit-kapusta.herokuapp.com/api';

const token = {
  set(bearerToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${bearerToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await authAPI.register(credentials);
      return data;
    } catch (error) {
      toast.error('Пожалуйста, проверьте, возможно, вы уже зарегистрированы.');
      return rejectWithValue(error.message);
    }
  },
);

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await authAPI.login(credentials);
    token.set(data.data.token);
    return data;
  } catch (error) {
    if (error.response.data.message === 'Invalid password') {
      toast.error('Неверный пароль. Пожалуйста, попробуйте еще раз.');
    } else if (error.response.data.message === 'Email not verify') {
      toast.error('Ваш имейл не верифицырован.');
    } else {
      toast.error('Пожалуйста, проверьте свои данные для входа и попробуйте еще раз.');
    }
    return rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await authAPI.logout();
    token.unset();
    return 'Logout was successful';
  } catch (error) {
    toast.error('Что-то пошло не так. Попробуйте выйти еще раз.');
    return rejectWithValue(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);

  try {
    const { data } = await authAPI.fetchCurrentUser();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchGoogleUser = createAsyncThunk(
  'auth/fetchGoogle',
  async (googleToken, { rejectWithValue }) => {
    token.set(googleToken);
    try {
      const { data } = await authAPI.fetchCurrentUser();
      return data;
    } catch (error) {
      return rejectWthValue(error.message);
    }
  },
);
