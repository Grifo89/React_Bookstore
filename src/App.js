import React from 'react';
import './App.css';
import BooksForm from './containers/BooksForm';
import BookList from './containers/BookList';
import CategoryFilter from './containers/ChangeFilter'
import Header from './components/header/Header';

const App = () => (
  <div className="App">
    <Header />
    <BooksForm />
    <CategoryFilter/>
    <BookList />
  </div>
);

export default App;
