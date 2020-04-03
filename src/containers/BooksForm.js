import { connect } from 'react-redux';
import BooksForm from '../components/booksForm/BooksForm';
import addBook from '../actions/index';

const mapStateToProps = state => ({ books: state.books });

const mapDispatchToProps = dispatch => ({
  addBook: book => {
    dispatch(addBook(book));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
