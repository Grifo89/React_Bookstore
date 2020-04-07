import React from 'react';
import PropTypes from 'prop-types';
import Book from '../book/Book';
import './BooksList.css';
import ChangeFilter from '../CategoryFilter/CategoryFilter';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemoveBook(book) {
    const { deltBook } = this.props;
    deltBook(book);
  }

  handleFilterChange(filter) {
    const { changeFilter } = this.props;
    changeFilter(filter);
  }

  render() {
    const { books, filter } = this.props;
    return (
      <div className="book-list">
        <div className="book-table">
          <div className="table-body">
            {books.map(book => {
              if (filter === 'All') {
                return (
                  <Book
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    category={book.category}
                    deleteBook={this.handleRemoveBook}
                    progression={book.progression}
                    chapters={book.chapters}
                  />
                );
              }

              if (book.category === filter) {
                return (
                  <Book
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    category={book.category}
                    deleteBook={this.handleRemoveBook}
                    progression={book.progression}
                    chapters={book.chapters}
                  />
                );
              }

              return null;
            })}
          </div>
        </div>
        <ChangeFilter
          handleFilter={this.handleFilterChange}
        />
      </div>
    );
  }
}

BooksList.propTypes = {
  deltBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
};

export default BooksList;
