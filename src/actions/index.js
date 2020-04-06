// eslint-disable-next-line no-unused-vars
const addBook = book => ({
  type: 'CREATE_BOOK',
  id: book.id,
  title: book.title,
  category: book.category,
});

const deleteBook = book => ({
  type: 'DELETE_BOOK',
  id: book,
});

export { addBook, deleteBook };
