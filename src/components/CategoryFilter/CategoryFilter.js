import React from 'react'

class CategoryFilter extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.props.filterBooks(event.target.value)
  }

  render(){
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <form>
        <label htmlFor="filter">
          Filter by category
        <select id="filter" onChange={this.handleChange}>
          {
            categories.map(item => (<option key={item} value={item}>{item}</option>))
          }
        </select>
        </label>
      </form>
    )
  }
}


export default CategoryFilter
