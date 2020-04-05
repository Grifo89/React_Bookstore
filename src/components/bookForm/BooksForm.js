import React from 'react';
import PropTypes from 'prop-types';
import './BooksForm.css';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: '',
      category: 'Action',
    };
  }

  handleChange(event) {
    const { category } = this.state;
    this.setState({
      title: event.target.value,
      category,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addBook } = this.props;
    const id = Math.floor(Math.random() * 100);
    const { title, category } = this.state;
    addBook({ id, title, category });
    this.setState({
      title: '',
    });
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <div className="books-form">
        <h2 className="bf-title">Add a new book:</h2>
        <form className="bf-form">
          <label htmlFor="title" className="bf-form-title">
            Title:
            <input
              type="text"
              id="title"
              name="title"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="category" className="bf-form-category">
            Category
            <select id="category" onChange={this.handleChange}>
              {
                categories.map(item => (<option key={item} value={item}>{item}</option>))
              }
            </select>
          </label>
          <button className="bf-form-button" type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  addBook: PropTypes.func,
};

BooksForm.defaultProps = {
  addBook: null,
};

export default BooksForm;
