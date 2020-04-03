/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" />
      <label htmlFor="category">Category</label>
      <select id="category">
        {
          categories.map(item => (<option key={item} value={item}>{item}</option>))
        }
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
