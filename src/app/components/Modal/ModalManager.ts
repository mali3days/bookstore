import {
  selectModal,
} from './modalSlice';

import { useAppSelector } from '../../hooks';
import { modalFactory } from './ModalFactory';

export function ModalManager() {
  const { visible, type, props } = useAppSelector(selectModal);

  if (!visible) return null;

  return modalFactory.createModal(type, props);
}
