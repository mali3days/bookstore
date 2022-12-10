import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { selectVisibility } from '../../app/components/Modal/modalSlice';

import styles from './AddBookModal.module.css';
import { Modal } from '../../app/components/Modal/Modal';

interface BookProps {
  id: string;
  author: string;
}

export function AddBookModal({ id, author }: BookProps): any {
  const data = [{ author: 'Me' }, { author: 'DiCaprio' }];
  const isModalVisible = useAppSelector(selectVisibility);
  const dispatch = useAppDispatch();

  console.log('AddBookModal rendered!');

  return (
    <Modal title="Add book">
      {() => {
        return (
          <form className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">Name</label>
              <input className={styles.input} id="name" type="text" />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="price">Price</label>
              <input className={styles.input} id="price" type="text" />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="category">Category</label>
              <input className={styles.input} id="category" type="text" />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="description">Description</label>
              <input className={styles.input} id="description" type="text" />
            </div>
          </form>
        );
      }}
    </Modal>
  );
}
