import { ButtonHTMLAttributes, forwardRef } from 'react';
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';

import { BaseButton } from '@/common/components/button/base-button';

const SidebarCloseButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => (
    <BaseButton {...props} ref={ref}>
      <MdOutlineKeyboardDoubleArrowLeft size={30} />
    </BaseButton>
  ),
);
SidebarCloseButton.displayName = 'SidebarCloseButton';

export { SidebarCloseButton };
