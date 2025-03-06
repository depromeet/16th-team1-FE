import { ReactNode } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import * as styles from './base-modal.styles';

interface BaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}

interface ModalContentProps {
  children: ReactNode;
}

function BaseModal({ open, onOpenChange, children }: BaseModalProps) {
  if (!open) return null;
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
}

function ModalRoot({ children }: ModalContentProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay css={styles.modalOverlay} />
      {children}
    </Dialog.Portal>
  );
}

const Trigger = Dialog.Trigger;
const Close = Dialog.Close;
const Title = Dialog.Title;
const Description = Dialog.Description;
const content = Dialog.Content;

const Modal = Object.assign(BaseModal, {
  Button: Trigger,
  Close: Close,
  Content: content,
  Title: Title,
  Description: Description,
  Root: ModalRoot,
});

export default Modal;
