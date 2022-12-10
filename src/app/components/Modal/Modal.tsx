// import React, { Children } from 'react';
import {
  hide,
} from './modalSlice';

import styles from './Modal.module.css';

import { useAppDispatch } from '../../../app/hooks';

interface ModalProps {
  title: string;
  children: () => JSX.Element;
}

export function Modal({ children, title }: ModalProps) {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className={styles.darkBG} onClick={() => dispatch(hide())} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{title}</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => dispatch(hide())}>
            <div style={{ marginBottom: '-3px' }}>x</div>
          </button>
          <div className={styles.modalContent}>
            {children()}
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => dispatch(hide())}
              >
                Delete
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => dispatch(hide())}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
