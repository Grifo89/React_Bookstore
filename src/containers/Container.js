import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = state => {
  return {books: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    function: 
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default Container;