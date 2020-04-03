import React from 'react';

class BooksForm extends React.Component {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];



  return (
    <form>
      <label htmlFor="title">
        Title
        <input type="text" id="title" name="title" />
      </label>
      <label htmlFor="category">
        Category
        <select id="category">
          {
            categories.map(item => (<option key={item} value={item}>{item}</option>))
          }
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
