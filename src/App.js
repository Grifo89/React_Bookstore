import React from 'react';
import './App.css';
import BooksForm from './components/bookForm/BooksForm';
import Container from './containers/Container';

const App = () => (
  <div className="App">
    <BooksForm />
    <Container />
  </div>
);

export default App;
