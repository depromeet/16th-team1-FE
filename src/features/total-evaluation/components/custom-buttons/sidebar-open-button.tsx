import { ButtonHTMLAttributes, forwardRef } from 'react';
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';

import { BaseButton } from '@/common/components/button/base-button';

const SidebarOpenButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => (
    <BaseButton {...props} ref={ref}>
      <MdOutlineKeyboardDoubleArrowLeft size={24} />
    </BaseButton>
  ),
);
SidebarOpenButton.displayName = 'SidebarOpenButton';

export { SidebarOpenButton };
