import { forwardRef, ReactNode } from 'react';

import { css } from '@emotion/react';

import { BaseButton, BaseButtonProps } from '@/common/components/button/base-button';
import Icon from '@/common/components/icon/icon';

import * as styles from './project-title-button.styles';

interface ProjectTitleButtonProps extends BaseButtonProps {
  children: ReactNode;
  isCurrentTriggerSelected: boolean;
}

const ProjectTitleButton = forwardRef<HTMLButtonElement, ProjectTitleButtonProps>(
  ({ isCurrentTriggerSelected, children, ...props }, ref) => (
    <BaseButton css={styles.projectTitleButton(isCurrentTriggerSelected)} ref={ref} {...props}>
      <Icon
        name="ico_spark"
        customStyle={css`
          opacity: ${isCurrentTriggerSelected ? 1 : 0};
          width: ${!isCurrentTriggerSelected && '0'};
          transition:
            opacity 0.3s ease-in-out,
            width 0.3s ease-in-out;

          path {
            fill: ${isCurrentTriggerSelected && '#D7ADFE'};
          }
        `}
      />
      {children}
    </BaseButton>
  ),
);
ProjectTitleButton.displayName = 'ProjectTitleButton';

export { ProjectTitleButton };
