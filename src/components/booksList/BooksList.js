import React from 'react';
import PropTypes from 'prop-types';
import Book from '../book/Book';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(book) {
    const { deltBook } = this.props;
    deltBook(book);
  }

  render() {
    const { books } = this.props;
    return (
      <table className="book-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              category={book.category}
              deleteBook={this.handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
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
