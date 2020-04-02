import React from 'react';
import './App.css';
import BooksForm from './components/bookForm/BooksForm';
import BooksList from './components/booksList/BooksList';

const App = () => {
  return (
    <div className="App">
      <BooksForm />
      <BooksList books={store.getState()} />
    </div>
  );
}

export default App;
