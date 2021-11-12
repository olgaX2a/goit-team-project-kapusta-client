import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from '.';

const initialState = {
  name: null,
  email: null,
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.name = payload.data.userName;
      state.email = payload.data.userEmail;
    },
    [authOperations.login.fulfilled](state, { payload }) {
      state.name = payload.data.userName;
      state.email = payload.data.userEmail;
      state.token = payload.data.token;
      state.isLoggedIn = true;
    },
    [authOperations.logout.fulfilled](state, action) {
      state.name = null;
      state.email = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    //WAITING FOR ENDPOINT FROM BACKEND
    // [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
    //   state.name = payload.data.name;
    //   state.email = payload.data.email;
    //   state.isLoggedIn = true;
    // },
  },
});

export default authSlice.reducer;
