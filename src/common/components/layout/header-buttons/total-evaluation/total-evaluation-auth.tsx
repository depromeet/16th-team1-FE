import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { BaseButton } from '@/common/components/button/base-button';
import { useGetRemainingCountQuery } from '@/features/upload/services/queries';
import { useModalStore } from '@/store/modal';

import AuthProfile from '../auth-profile';
import SingleProfileModalButton from './single-profile-modal-button';

import * as styles from './total-evaluation-auth.styles';

function TotalEvalutationAuthButton() {
  const { result: { remainCount } = {} } = useGetRemainingCountQuery().data ?? {};

  const { openModal } = useModalStore();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <BaseButton css={styles.positionRelative}>
          <AuthProfile />
        </BaseButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content css={styles.profileContent}>
          <DropdownMenu.Item asChild>
            <div>
              <SingleProfileModalButton label="내 계정" />

              <p css={styles.subRemainFeebackCountPragraph}>
                이번 달 남은 피드백 {remainCount ? remainCount : '-'}
              </p>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <SingleProfileModalButton label="최근 피드백" handleClick={openModal} />
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <SingleProfileModalButton label="로그아웃" />
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default TotalEvalutationAuthButton;
