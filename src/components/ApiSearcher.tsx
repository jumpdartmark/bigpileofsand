import React, { useEffect, useState } from 'react';

import { Book } from '../types';
import { duneApi } from '../constants';

import styles from './ApiSearcher.module.scss';
import BookListItem from './BookListItem';
import BookDetails from './BookDetails';

const ApiSearcher: React.FC = () => {
  const apiUrl = duneApi.url;
  const route = duneApi.routes.books;
  const [numericArgument, setNumericArgument] = useState<string>('');

  const fullyQualifiedUrl = `${apiUrl}${route}${numericArgument}`;

  const [results, setResults] = useState<Book[]>();
  const [selectedBook, setSelectedBook] = useState<Book>();
  const [fetchError, setFetchError] = useState<string>('');

  // @ts-ignore
  useEffect(async () => {
    try {
      setFetchError('');
      const fetchResponse = await fetch(fullyQualifiedUrl);
      const fetchResults = await fetchResponse.json();
      setResults(fetchResults);
    } catch (err:unknown) {
      setFetchError('Fetch Error');
    }
  }, [fullyQualifiedUrl]);

  const inputLabelId = `${route}_count_label`;
  return (
    <div>
      <h2>{fullyQualifiedUrl}</h2>
      <hr />
      <div className={styles.settings}>
        <div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label id={inputLabelId}>Count(optional)</label>
        </div>
        <div>
          <input aria-labelledby={inputLabelId} type="number" onChange={(event) => { setNumericArgument(event.target.value); }} />
        </div>
        <div>
          <button type="button">x</button>
        </div>

      </div>
      <div className={styles.full}>
        <div className={styles.list}>
          {fetchError ? <h1>{`ERROR::${fetchError}`}</h1>
            : (
              <ul>
                {
                  results?.map((book) => (
                    <BookListItem
                      book={book}
                      isSelected={selectedBook?.id === book.id}
                      onSelectBook={setSelectedBook}
                    />
                  ))
                }
              </ul>
            )}
        </div>
        <div className={styles.selected}>
          {selectedBook ? <BookDetails book={selectedBook} /> : <h1>pick one</h1>}
          <button type="button" onClick={() => { setSelectedBook(undefined); }}>clear</button>
        </div>

      </div>
    </div>
  );
};

export default ApiSearcher;
