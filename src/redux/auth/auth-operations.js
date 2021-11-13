import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
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
      console.log(error);
      // TODO: Add toast about error
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
    console.log(error);
    // TODO: Add toast about error
    return rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await authAPI.logout();
    token.unset();
    // Check what logout returns from back.
    return 'Logout was successful';
  } catch (error) {
    console.log(error);
    // TODO: Add toast about error
    return rejectWithValue(error.message);
  }
});

// WAITING FOR ENDPOINT FROM BACKEND

// export const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
//   const state = thunkAPI.getState();
//   const persistedToken = state.auth.token;

//   if (persistedToken === null) {
//     return thunkAPI.rejectWithValue();
//   }

//   token.set(persistedToken);

//   try {
//     const { data } = await authAPI.fetchCurrentUser();
//     console.log(data);
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
