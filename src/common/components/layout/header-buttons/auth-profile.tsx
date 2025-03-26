import useDeviceType from '@/common/hooks/use-device-type';
import { useUserStore } from '@/store/user-auth';

import * as styles from './auth-profile.styles';

function AuthProfile() {
  const { isAuthenticated, userInfo } = useUserStore();
  const { isMobile } = useDeviceType();
  if (!isAuthenticated || userInfo === null) return null;
  return (
    <div css={styles.container(isMobile)}>
      <img src={userInfo.profileImageUrl} alt="구글 프로필" css={styles.img} />
    </div>
  );
}

export default AuthProfile;
