import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { selectVisibility, show as showModal } from '../../app/components/Modal/modalSlice';

import styles from './Books.module.css';

interface BookProps {
  author: string;
}

function Book({ author }: BookProps) {
  return (
    <div>
      Book
      <div> Name: {author}</div>
      <div> Price: {author}</div>
      <div> Category: {author}</div>
      <div> Description: {author}</div>
    </div>
  );
}

export function Books() {
  const data = [{ author: 'Me' }, { author: 'DiCaprio' }];
  const isModalVisible = useAppSelector(selectVisibility);
  const dispatch = useAppDispatch();

  // React.useEffect(() => {
  //   dispatch(registerModal({ type: 'A', component: <div>AAA</div> }))
  // }, [dispatch]);

  // handleOpenModal = () => {}

  return (
    <div>
      <div>Books</div>
      <div>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(showModal({ type: 'ADD_BOOK' }))}
        >
          Add new book
        </button>
      </div>
      <div className={styles.row}>
        {data.map((d) => {
          return <Book author={d.author} />;
        })}
      </div>
    </div>
  );
}
