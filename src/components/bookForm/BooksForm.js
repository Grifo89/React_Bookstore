import React from 'react';
import PropTypes from 'prop-types';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: '',
      category: '',
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
      <form>
        <label htmlFor="title">
          Title
          <input
            type="text"
            id="title"
            name="title"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="category">
          Category
          <select id="category">
            {
              categories.map(item => (<option key={item} value={item}>{item}</option>))
            }
          </select>
        </label>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
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
