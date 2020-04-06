import React from 'react';
import PropTypes from 'prop-types';
import Book from '../book/Book';
import './BooksList.css';
import ChangeFilter from '../CategoryFilter/CategoryFilter'

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

  handleFilterChange(filter){
    const { changeFilter } = this.props
    changeFilter(filter)
  }

  render() {
    const { books, filter } = this.props;
    console.log(this.props);
    return (
      <div>
        <ChangeFilter
          handleFilter={this.handleFilterChange}
        />
        <table className="book-table">
        <thead className="table-head">
          <tr>
            <th className="books-id">ID</th>
            <th className="books-title">Title</th>
            <th className="books-category">Category</th>
            <th className="books-delete">Delete</th>
          </tr>
        </thead>
          <tbody className="table-body">
          {books.map(book => {
            if (book.category === filter ) {
              return <Book
              key={book.id}
              id={book.id}
              title={book.title}
              category={book.category}
              deleteBook={this.handleRemoveBook}
              />
            }
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

BooksList.propTypes = {
  deltBook: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.array,
};

BooksList.defaultProps = {
  deltBook: null,
  books: null,
};

export default BooksList;
