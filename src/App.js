import React from 'react';
import './App.css';
import BooksForm from './containers/BooksForm';
import BookList from './containers/BookList';

const App = () => (
  <div className="App">
    <BooksForm />
    <BookList />
  </div>
);

export default App;
