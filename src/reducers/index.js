import bookReducer from './books'
import filter from './filter'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  bookReducer,
  filter
})

export default rootReducer
