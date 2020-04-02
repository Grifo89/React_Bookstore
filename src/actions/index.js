const addBook = book => ({
  type: 'ADD_BOOK',
  id: book.id,
  category: book.category,
  title: book.title
})

const deleteBook = book => ({
  type: 'DELETE_BOOK',
  id: book.id
})

export default {
  addBook,
  deleteBook
}
