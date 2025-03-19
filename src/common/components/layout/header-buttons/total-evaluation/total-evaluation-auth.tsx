import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { BaseButton } from '@/common/components/button/base-button';

import AuthProfile from '../auth-profile';

import * as styles from './total-evaluation-auth.styles';

function TotalEvalutationAuth() {
  return (
    <div css={styles.container}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <BaseButton>
            <AuthProfile />
          </BaseButton>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content css={styles.profileContent}>
            <DropdownMenu.Item>aaaaaa</DropdownMenu.Item>
            <DropdownMenu.Item>bbbbbb</DropdownMenu.Item>
            <DropdownMenu.Item>cccccc</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}

export default TotalEvalutationAuth;
