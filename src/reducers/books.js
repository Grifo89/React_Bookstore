const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        {
          id: action.id,
          category: action.category,
          title: action.title,
        },
      ];
    case 'DELETE_BOOK':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
