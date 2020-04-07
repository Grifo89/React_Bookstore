import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = props => {
  const {
    id, title, category, deleteBook, author, chapters, progression,
  } = props;

  const handleClick = () => {
    deleteBook(id);
  };

  return (
    <div className="book-container">
      <div>
        <div className="book-title">
          <p className="category">{category}</p>
          <p className="title">{title}</p>
          <p className="author">{author}</p>
        </div>
        <div className="book-links">
          <p>Comments</p>
          <button className="remove-bttn" type="button" onClick={handleClick}>Remove</button>
          <p>Edit</p>
        </div>
      </div>
      <div className="book-progress">
        <div className="progress-img-container">
          <img className="progress-img" src="/content/radial_progress.PNG" alt="Book progress" />
        </div>
        <div className="completed-container">
          <p className="percent-complete">
            {Math.floor((progression / chapters) * 100)}
            {' '}
            %
          </p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="current-chapter-container">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="current-chapter-prog">
          Chapter:
          {progression}
        </p>
        <button className="update-progress-button" type="submit">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
  author: PropTypes.string,
  chapters: PropTypes.number,
  progression: PropTypes.number,
};

Book.defaultProps = {
  author: 'Anonymous',
  chapters: 1,
  progression: 0,
};

export default Book;
