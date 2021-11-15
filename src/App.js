/* eslint-disable react/jsx-filename-extension */
// import React from 'react';
// import './App.css';
// import Testing from './components/shared/Testing/Testing';

// function App() {
//   return <Testing />;
// }

// export default App;

// ===TO TEST Register and Login Routes use this code ===///
// ===If it's not needed just remove it ===//
// Tо test Toastify notifications
// To test fetchCurrentUser

// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import './App.css';
import Testing from './components/shared/Testing/Testing';
import Container from './components/shared/Container/Container';
import Header from './components/Header/Header';
import RegisterForm from './components/RegisterForm/RegisterForm';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route exact path="/" element={<Testing />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <ToastContainer autoClose={3000} position="top-right" />
    </Container>
  );
}

export default App;
