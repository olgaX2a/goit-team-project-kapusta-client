import React from 'react';
import './App.css';
import Testing from './components/shared/Testing/Testing';

function App() {
  // eslint-disable-next-line react/jsx-filename-extension
  return <Testing />;
}

export default App;

// ===TO TEST Register and Login Routes use this code ===///
// ===If it's not needed just remove it ===//

// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from './redux/auth';
// import './App.css';
// import Testing from './components/shared/Testing/Testing';
// import { Route, Routes } from 'react-router-dom';
// import Container from './components/shared/Container/Container';
// import Header from './components/Header/Header';
// import RegisterForm from './components/RegisterForm/RegisterForm';
// import LoginForm from './components/LoginForm/LoginForm';

// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(authOperations.fetchCurrentUser());
//   }, [dispatch]);

//   return (
//     <Container>
//       <Header />

//       <Routes>
//         <Route exact path="/" element={<Testing />} />
//         <Route path="/register" element={<RegisterForm />} />
//         <Route path="/login" element={<LoginForm />} />
//       </Routes>
//     </Container>
//   );
// }

// export default App;
