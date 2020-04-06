import bookReducer from './books'
import filter from './filter'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  books: bookReducer,
  filter: filter
})

export default rootReducer
