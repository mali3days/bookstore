import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { selectVisibility } from '../../app/components/Modal/modalSlice';

import styles from './AddBookModal.module.css';
import { Modal } from '../../app/components/Modal/Modal';

interface BookProps {
  id: string;
  author: string;
}

export function AddBookModal({ id, author }: BookProps): any {
  // const data = [{ author: 'Me' }, { author: 'DiCaprio' }];
  // const isModalVisible = useAppSelector(selectVisibility);
  // const dispatch = useAppDispatch();
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [category, setCategory] = React.useState('');
  const [description, setDescription] = React.useState('');
  const inputNameRef = React.useRef<HTMLInputElement>(null);

  console.log('AddBookModal rendered!');

  React.useEffect(() => {
    if (inputNameRef.current) {
      inputNameRef.current.focus();
    }
  }, []);

  function handleSubmit(event: any, hide: any) {
    event.preventDefault();
    console.log('SUBMIT!!!');
    console.log(name);
    console.log(price);
    console.log(category);
    console.log(description);
  }

  return (
    <Modal id="add-book-modal" title="Add book" onSubmit={handleSubmit}>
      {() => {
        return (
          <form id="add-book-modal" className={styles.form} onSubmit={handleSubmit as any}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">
                Name
              </label>
              <input
                ref={inputNameRef}
                className={styles.input}
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="price">
                Price
              </label>
              <input
                className={styles.input}
                id="price"
                type="number"
                value={price}
                onFocus={(e) => { if (e.target.value === '0' ) setPrice('' as any)} }
                onBlur={(e) => { if (e.target.value === '' ) setPrice(0)} }
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="category">
                Category
              </label>
              <input
                className={styles.input}
                id="category"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="description">
                Description
              </label>
              <textarea
                className={styles.textarea}
                id="description"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </form>
        );
      }}
    </Modal>
  );
}
