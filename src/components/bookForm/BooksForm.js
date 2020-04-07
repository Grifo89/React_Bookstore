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
    const { category, title } = this.state;
    if (event.target.id === 'title') {
      this.setState({
        title: event.target.value,
        category,
      });
    } else if (event.target.id === 'category') {
      this.setState({
        title,
        category: event.target.value,
      });
    }
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
    const { title } = this.state;
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <div className="books-form">
        <h2 className="bf-title">Add a new book:</h2>
        <form className="bf-form">
          <label htmlFor="title" className="bf-form-title">
            <input
              type="text"
              id="title"
              name="title"
              onChange={this.handleChange}
              value={title}
              placeholder="Book Title"
            />
          </label>
          <label htmlFor="category" className="bf-form-category">
            <select id="category" onChange={this.handleChange}>
              <option className="select-first" value="Catogory" disabled>Category</option>
              {
                categories.map(item => (<option key={item} value={item}>{item}</option>))
              }
            </select>
          </label>
          <button className="bf-form-button" type="submit" onClick={this.handleSubmit}>ADD BOOK</button>
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
