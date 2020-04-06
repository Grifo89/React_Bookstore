import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = props => {
  const {
    id, title, category, deleteBook,
  } = props;

  const handleClick = () => {
    deleteBook(id);
  };

  return (
    <tr>
      <th className="books-id">{id}</th>
      <th className="books-title">{title}</th>
      <th className="books-category">{category}</th>
      <th className="books-delete"><button type="submit" onClick={handleClick}>Delete book</button></th>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
  deleteBook: PropTypes.func,
};

Book.defaultProps = {
  id: null,
  title: null,
  category: null,
  deleteBook: null,
};

export default Book;
