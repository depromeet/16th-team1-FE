// import { useNavigate } from 'react-router';

import { PageLabelKey } from '@/common/constants/path';
import useDeviceType from '@/common/hooks/use-device-type';
import { useHeaderContents } from '@/common/hooks/use-header-contents';
// import { AUTH_SERVICE } from '@/common/services/auth';

import * as styles from './header-navigation-layout.styles';

interface HeaderNavigationProps {
  pageLabel: PageLabelKey;
}

function HeaderNavigation({ pageLabel }: HeaderNavigationProps) {
  const { left, middle, right } = useHeaderContents(pageLabel);
  const { isMobile } = useDeviceType();
  // const navigate = useNavigate();
  return (
    <>
      <div css={styles.container(pageLabel, isMobile)}>
        <div css={styles.leftSection}>{left}</div>
        {/* 클라이언트 라우팅 과정에서의 인증 테스트를 위한 버튼 */}
        {/* <button onClick={() => navigate('/')}>landing</button>
        <button onClick={() => navigate('/login')}>login</button>
        <button onClick={() => navigate('/upload')}>upload</button>
        <button onClick={() => navigate('/loading')}>loading</button> */}
        <div css={styles.middleSection}>{middle}</div>
        <div css={styles.rightSection}>{right}</div>
      </div>
      {pageLabel === 'TotalEvaluation' && <div css={styles.placeHolder} />}
    </>
  );
}

export default HeaderNavigation;
