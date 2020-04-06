const filter = (state = '', action) => {
  console.log(action);
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {
        ...state,
        books: [state.books.filter(book => book.category === action.filter)]
      }
    default:
      return state

  }
}

export default filter
