import { connect } from 'react-redux';
import Booklist from '../components/booksList/BooksList';
import { deleteBook, changeFilter } from '../actions/index';

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  deltBook: book => {
    dispatch(deleteBook(book));
  },
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
