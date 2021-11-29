import React from 'react';
import { Book } from '../types';

const BookDetails: React.FC<{ book:Book }> = ({ book }) => (
  <div>
    {book.title}
    /
    {book.id}
    <hr />
    {JSON.stringify(book.author)}
    <hr />
    {book.year}
    <hr />
    {book.wiki_url}
    <hr />
  </div>
);

export default BookDetails;
