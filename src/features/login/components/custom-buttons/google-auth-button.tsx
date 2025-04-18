import { BaseButton } from '@/common/components/button/base-button';
import Icon from '@/common/components/icon/icon';
import useDeviceType from '@/common/hooks/use-device-type';

import * as styles from './google-auth-button.styles';

function GoogleAuthButton() {
  const { isMobile } = useDeviceType();

  const handleLoginButtonClick = () => {
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/oauth2/authorization/google`;
  };
  return (
    <BaseButton onClick={handleLoginButtonClick}>
      <div css={styles.buttonWrapper}>
        <Icon name="google" width={isMobile ? 16 : 24} />
        <p>Google 계정으로 로그인</p>
      </div>
    </BaseButton>
  );
}

export default GoogleAuthButton;
