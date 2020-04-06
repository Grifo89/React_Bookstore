import { connect } from 'react-redux';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';
import { changeFilter } from '../actions/index';


const mapStateToProps = state => ({ books: state.books })

const mapDispatchToProps = dispatch => ({
  filterBooks: filter => {
    dispatch(changeFilter(filter))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter)
