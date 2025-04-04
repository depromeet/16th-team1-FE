import { useState } from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { useClearAuth } from '@/common/hooks/use-auth-cycle';
import { getValueOrHyphen } from '@/common/utils/get-value-or-hyphen';
import { useGetFeedbackHistory } from '@/features/feedback/services/use-get-feedback-history';
import { useGetRemainingCountQuery } from '@/features/upload/services/queries';
import { useModalStore } from '@/store/modal';

import AuthProfile from './auth-profile';
import SingleProfileModalButton from './total-evaluation/single-profile-modal-button';
import { BaseButton } from '../../button/base-button';

import * as styles from './profile-dropdown.styles';

function ProfileDropdown() {
  const { result: { remainCount } = {} } = useGetRemainingCountQuery().data ?? {};

  const { data: feedbackHistoryResponse } = useGetFeedbackHistory();

  const disabled = feedbackHistoryResponse.result.length === 0;

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
              disabled={disabled}
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

export default ProfileDropdown;
