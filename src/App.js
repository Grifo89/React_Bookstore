import React from 'react';
import './App.css';
import BooksForm from './components/bookForm/BooksForm';
import BooksList from './components/booksList/BooksList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  render() {
    return (
      <div className="App">
        <BooksForm />
        <BooksList books={this.state.books} />
      </div>
    );
  }
}

export default App;
