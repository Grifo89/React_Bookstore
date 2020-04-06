import React from 'react';
import PropTypes from 'prop-types';
import './CategoryFilter.css';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { handleFilter } = this.props;
    handleFilter(event.target.value);
  }

  render() {
    const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <form className="Category-filter">
        <label htmlFor="filter">
          Filter by category
          <select id="filter" onChange={this.handleChange}>
            {
            categories.map(item => (<option key={item} value={item}>{item}</option>))
          }
          </select>
        </label>
      </form>
    );
  }
}

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
