const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return ([...state,
        {
          id: action.id,
          title: action.title,
          category: action.category,
          author: action.author,
          chapters: action.chapters,
          progression: action.progression,
        },
      ]);
    case 'DELETE_BOOK':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
