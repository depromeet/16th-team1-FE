import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { ModalContentProps, ModalProps } from './modal-types';

import * as styles from './index.styles';

function AlertDialogModal({ open, onOpenChange, children }: ModalProps) {
  if (!open) return null;
  return (
    <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </AlertDialog.Root>
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
    <AlertDialog.Portal>
      <AlertDialog.Overlay css={styles.modalOverlay(zIndex)} />
      <AlertDialog.Content
        css={styles.modalContent({ width, height, padding, backgroundColor, gap, zIndex })}
        aria-describedby={undefined}
      >
        {children}
      </AlertDialog.Content>
    </AlertDialog.Portal>
  );
}

const Trigger = AlertDialog.Trigger;
const Title = AlertDialog.Title;
const Description = AlertDialog.Description;
const Cancel = AlertDialog.Cancel;
const Action = AlertDialog.Action;

const AlertModal = Object.assign(AlertDialogModal, {
  Root: ModalRoot,
  Button: Trigger,
  Title,
  Description,
  Cancel,
  Action,
});

export default AlertModal;
