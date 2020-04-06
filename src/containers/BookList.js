import { connect } from 'react-redux';
import Booklist from '../components/booksList/BooksList';
import { deleteBook } from '../actions/index';

const mapStateToProps = state => ({ books: state.books });

const mapDispatchToProps = dispatch => ({
  deltBook: book => {
    dispatch(deleteBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
