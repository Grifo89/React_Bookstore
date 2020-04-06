import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducers';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'text 1',
      category: 'Biography',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'text 2',
      category: 'History',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'text 3',
      category: 'Horror',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'text 4',
      category: 'Action',
    },
  ],
  category: 'ALL',
};

const store = createStore(
  rootReducer,
  initialState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

console.log(store.getState())

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
