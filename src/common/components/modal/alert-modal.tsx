import { ReactNode } from 'react';

import * as AlertDialog from '@radix-ui/react-alert-dialog';

import * as styles from './alert-modal.styles';

interface AlertModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}

interface ModalContentProps {
  children: ReactNode;
  width?: string;
  height?: string;
  padding?: string;
  backgroundColor?: string;
  gap?: string;
}

function AlertDialogModal({ open, onOpenChange, children }: AlertModalProps) {
  if (!open) return null;
  return (
    <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </AlertDialog.Root>
  );
}

function ModalRoot({ children, width, height, padding, backgroundColor, gap }: ModalContentProps) {
  return (
    <AlertDialog.Portal>
      <AlertDialog.Overlay css={styles.modalOverlay} />
      <AlertDialog.Content
        css={styles.modalContent({ width, height, padding, backgroundColor, gap })}
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
