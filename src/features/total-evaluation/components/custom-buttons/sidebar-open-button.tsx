import { ButtonHTMLAttributes, forwardRef } from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

import { BaseButton } from '@/common/components/button/base-button';

const SidebarOpenButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => (
    <BaseButton {...props} ref={ref}>
      <MdOutlineKeyboardDoubleArrowRight size={30} color="black" />
    </BaseButton>
  ),
);
SidebarOpenButton.displayName = 'SidebarOpenButton';

export { SidebarOpenButton };
