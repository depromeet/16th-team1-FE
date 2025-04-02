import { useState } from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { BaseButton } from '@/common/components/button/base-button';
import { getValueOrHyphen } from '@/common/utils/get-value-or-hyphen';
import { useClearAuth } from '@/common/hooks/use-auth-cycle';
import { useGetRemainingCountQuery } from '@/features/upload/services/queries';
import { useModalStore } from '@/store/modal';

import AuthProfile from './auth-profile';
import SingleProfileModalButton from './total-evaluation/single-profile-modal-button';

import * as styles from './auth-profile-modal-dropdown.styles';

function AuthProfileModalDropdown() {
  const { result: { remainCount } = {} } = useGetRemainingCountQuery().data ?? {};

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { openModal } = useModalStore();

  const { logout } = useClearAuth();

  return (
    <DropdownMenu.Root
      defaultOpen={false}
      open={isDropdownOpen}
      onOpenChange={setIsDropdownOpen}
      modal={false}
    >
      <DropdownMenu.Trigger asChild>
        <BaseButton css={styles.positionRelative}>
          <AuthProfile />
        </BaseButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content css={styles.profileContent}>
          <DropdownMenu.Item asChild>
            <div>
              <SingleProfileModalButton
                label="내 계정"
                handleClick={() => {
                  setIsDropdownOpen(false);
                }}
              />

              <p css={styles.subRemainFeebackCountPragraph}>
                이번 달 남은 피드백 {getValueOrHyphen(remainCount)}
              </p>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <SingleProfileModalButton
              label="최근 피드백"
              handleClick={() => {
                openModal();
                setIsDropdownOpen(false);
              }}
            />
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <SingleProfileModalButton
              label="로그아웃"
              handleClick={async () => {
                setIsDropdownOpen(false);
                await logout();
              }}
            />
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default AuthProfileModalDropdown;
