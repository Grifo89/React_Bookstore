const bookReducer = (state = [], action) => {
  const newState = Object.assign(state);
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
      newState.books.splice(action.id, 1);
      return newState;
    default:
      return state;
  }
};

export default bookReducer;
