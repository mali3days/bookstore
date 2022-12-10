import React from 'react';
import { AddBookModal } from '../../../features/addBookModal/AddBookModal';

export const modalFactory = {
    createModal: function (type: string, props: any) {
      let ModalComponent = null;

      switch (type) {
        case 'ADD_BOOK': {
          ModalComponent = AddBookModal;
          break;
        }
        default: {
          return ModalComponent;
        }
      }

      return <ModalComponent id="global-modal" {...props} />;
  },
};
