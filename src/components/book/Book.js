import React from 'react'

const Book = props => (
  <tr>
    <th>{props.id}</th>
    <th>{props.title}</th>
    <th>{props.category}</th>
  </tr>
)

export default Book
