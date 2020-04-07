import React from 'react';
import './App.css';
import BooksForm from './containers/BooksForm';
import BookList from './containers/BookList';
import Header from './components/header/Header';

const App = () => (
  <div className="App">
    <Header />
    <BookList />
    <hr />
    <BooksForm />
  </div>
);

export default App;
