import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import Container from './components/shared/Container/Container';

function App() {
  return (
    <Container>
      <Expenses />
    </Container>
  );
  // return <div className="App">Start!</div>;
}

export default App;
