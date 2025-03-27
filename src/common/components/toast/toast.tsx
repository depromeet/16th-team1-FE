import * as ToastMessage from '@radix-ui/react-toast';

import { toastConfig, ToastType } from './toast-config';

import * as styles from './toast.styles';

interface ToastProps {
  name: ToastType;
  open: boolean;
  setOpen: (open: boolean) => void;
  onClick?: () => void;
}

export default function Toast({ name, open, setOpen, onClick }: ToastProps) {
  const { message, duration, icon, iconPosition } = toastConfig[name];

  return (
    <ToastMessage.Provider>
      <ToastMessage.Root
        open={open}
        onOpenChange={setOpen}
        duration={duration}
        css={styles.root(name)}
        onClick={onClick}
      >
        {iconPosition === 'left' && icon}
        <ToastMessage.Title css={styles.title(name)}>{message}</ToastMessage.Title>
        {iconPosition === 'right' && icon}
      </ToastMessage.Root>

      <ToastMessage.Viewport css={styles.viewport(name)} />
    </ToastMessage.Provider>
  );
}
