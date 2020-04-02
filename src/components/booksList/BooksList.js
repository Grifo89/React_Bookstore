import React from 'react';
import Book from '../book/Book';

const BooksList = props => {
  const books = props;

  return (
    <table className="book-table">
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {books.map(book => (
        <Book
          id={book.id}
          title={book.title}
          category={book.category}
        />
      ))}
    </table>
  );
};

export default BooksList;
