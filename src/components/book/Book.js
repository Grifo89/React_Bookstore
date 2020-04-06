import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = props => {
  const {
    id, title, category, deleteBook,
  } = props;

  const author = 'Anonymous';
  const chapters = 'NaN';
  const progression = null;

  if (props.author) {
    author = props; 
  }

  if (props.chapters) {
    chapters = props; 
  }

  if (props.progression) {
    progression = props; 
  }

  const handleClick = () => {
    deleteBook(id);
  };

  return (
    <div>
      <div>
        <div>
          <p>{category}</p>
          <p>{title}</p>
          <p>{author}</p>
        </div>
        <div>
          <p onClick={handleClick}>Remove</p>
          <p>Edit</p>
        </div>
      </div>
      <div>
        <div>
          <span className="oval" />
        </div>
        <div>
          {Math.floor((progression / chapters) * 100)}
          Completed
        </div>
      </div>
      <div>
        <p>CURRENT CHAPTER</p>
        <p>{progression}</p>
        <button>UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
