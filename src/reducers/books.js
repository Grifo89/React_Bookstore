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
      return { ...state, books: state.books.filter(item => item.id !== action.id) };
    default:
      return state;
  }
};

export default bookReducer;
