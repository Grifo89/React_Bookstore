const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          category: action.category,
        },
      ];
    case 'DELETE_BOOK':
      let array = state.books.filter(item => item.id !== action.id)
      return Object.assign({}, state, {books: array})
    default:
      return state;
  }
};

export default bookReducer;
