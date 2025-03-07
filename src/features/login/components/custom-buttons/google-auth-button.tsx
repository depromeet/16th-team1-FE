import { BaseButton } from '@/common/components/button/base-button';
import Icon from '@/common/components/icon/icon';

import * as styles from './google-auth-button.styles';

function GoogleAuthButton() {
  return (
    <BaseButton>
      <div css={styles.buttonWrapper}>
        <Icon name="google" />
        <p>Google 계정으로 로그인</p>
      </div>
    </BaseButton>
  );
}

export default GoogleAuthButton;
