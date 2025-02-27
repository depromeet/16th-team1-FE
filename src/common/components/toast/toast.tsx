import Icon from '@common/components/icon/icon';
import * as ToastMessage from '@radix-ui/react-toast';

import * as styles from './toast.styles';

export type ToastType = 'aiCompleteLarge' | 'aiCompleteSmall' | 'loginFailure' | 'pdfSubmit';

const toastConfig = {
  aiCompleteLarge: {
    message: 'AI 분석이 끝났어요!',
    duration: undefined,
    icon: 'upArrow',
    iconPosition: 'right',
  },
  aiCompleteSmall: {
    message: 'AI 분석이 끝났어요!',
    duration: undefined,
    icon: 'rightArrow',
    iconPosition: 'right',
  },
  loginFailure: {
    message: '로그인에 실패했어요',
    duration: 3000,
    icon: 'loginFail',
    iconPosition: 'left',
  },
  pdfSubmit: {
    message: 'PDF 제출이 완료됐어요',
    duration: 3000,
    icon: 'pdfSubmitSuccess',
    iconPosition: 'left',
  },
};

interface ToastProps {
  name: ToastType;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Toast({ name, open, setOpen }: ToastProps) {
  const { message, duration, icon, iconPosition } = toastConfig[name];

  return (
    <ToastMessage.Provider>
      <ToastMessage.Root
        open={open}
        onOpenChange={setOpen}
        duration={duration}
        css={styles.root(name)}
      >
        {iconPosition === 'left' && <Icon name={icon} />}
        <ToastMessage.Title css={styles.title(name)}>{message}</ToastMessage.Title>
        {iconPosition === 'right' && <Icon name={icon} />}
      </ToastMessage.Root>

      <ToastMessage.Viewport css={styles.viewport} />
    </ToastMessage.Provider>
  );
}
