import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import bookReducer from './reducers'

const books = [
  {
    id: Math.floor(Math.random),
    title: "text 1",
    category: "Biography"
  },
  {
    id: Math.floor(Math.random),
    title: "text 2",
    category: "History"
  },
  {
    id: Math.floor(Math.random),
    title: "text 3",
    category: "Horror"
  },
  {
    id: Math.floor(Math.random),
    title: "text 4",
    category: "Action"
  },
]

const store = createStore(
  bookReducer, books,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
