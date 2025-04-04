import useDeviceType from '@/common/hooks/use-device-type';
import { useAuthStore } from '@/store/user-auth';

import * as styles from './auth-profile.styles';

function AuthProfile() {
  const { isLogin, userInfo } = useAuthStore();

  const { isMobile } = useDeviceType();
  if (!isLogin || userInfo === null) return null;

  return (
    <div css={styles.container(isMobile)}>
      {userInfo.profileImageUrl ? (
        <img src={userInfo.profileImageUrl} alt="구글 프로필" css={styles.img} />
      ) : (
        <div css={styles.dummyProFile}>
          <p css={styles.dummyProfileName}>{userInfo.email[0]}</p>
        </div>
      )}
    </div>
  );
}

export default AuthProfile;
