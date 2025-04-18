import * as Dialog from '@radix-ui/react-dialog';

import { ModalContentProps, ModalProps } from './modal-types';

import * as styles from './index.styles';

function BaseModal({ open, onOpenChange, children }: ModalProps) {
  if (!open) return null;
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
}

function ModalRoot({
  children,
  width,
  height,
  padding,
  backgroundColor,
  gap,
  zIndex,
}: ModalContentProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay css={styles.modalOverlay(zIndex)} />
      <Dialog.Content
        css={styles.modalContent({ width, height, padding, backgroundColor, gap, zIndex })}
        aria-describedby={undefined}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

const Trigger = Dialog.Trigger;
const Close = Dialog.Close;
const Title = Dialog.Title;
const Description = Dialog.Description;

const Modal = Object.assign(BaseModal, {
  Button: Trigger,
  Close: Close,
  Title: Title,
  Description: Description,
  Root: ModalRoot,
});

export default Modal;
