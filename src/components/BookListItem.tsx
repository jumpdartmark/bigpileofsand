import React from 'react';

import { Book } from '../types';

import SelectableListItem from './SelectableListItem';

export interface BookListItemProps{
  book:Book, isSelected?: boolean, onSelectBook?: (book:Book) => void;
}

const BookListItem: React.FC<BookListItemProps> = ({ book, isSelected, onSelectBook }) => {
  const displayText = `${book.title}-(${book.id})`;
  const doSelect = () => {
    if (onSelectBook)onSelectBook(book);
  };
  return (
    <SelectableListItem
      key={book.id}
      text={displayText}
      isSelected={!!isSelected}
      onSelect={doSelect}
    />
  );
};

export default BookListItem;
