// import React, { Children } from 'react';
import { hide } from './modalSlice';

import styles from './Modal.module.css';

import { useAppDispatch } from '../../../app/hooks';

interface ModalProps {
  id: string;
  title: string;
  onSubmit: (a: any, b: any) => void;
  children: () => JSX.Element;
}

export function Modal({ id, title, children, onSubmit }: ModalProps) {
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
          <div className={styles.modalContent}>{children()}</div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                form={id}
                type="submit"
                className={styles.deleteBtn}
                onClick={(e) => {
                  onSubmit(e, () => dispatch(hide())) as any; 
                }}
              >
                Delete
              </button>
              <button
                form={id}
                type="reset"
                className={styles.cancelBtn}              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
