import { ButtonHTMLAttributes, forwardRef } from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

import { BaseButton } from '@/common/components/base-button/base-button';

const SidebarCloseButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => (
    <BaseButton {...props} ref={ref}>
      <MdOutlineKeyboardDoubleArrowRight size={24} />
    </BaseButton>
  ),
);
SidebarCloseButton.displayName = 'SidebarCloseButton';

export { SidebarCloseButton };
