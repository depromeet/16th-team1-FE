import { useNavigate } from 'react-router';

import { PageLabelKey } from '@/common/constants/path';
import useDeviceType from '@/common/hooks/use-device-type';
import { useHeaderContents } from '@/common/hooks/use-header-contents';

import * as styles from './header-navigation-layout.styles';

interface HeaderNavigationProps {
  pageLabel: PageLabelKey;
}

function HeaderNavigation({ pageLabel }: HeaderNavigationProps) {
  const { left, middle, right } = useHeaderContents(pageLabel);
  const { isMobile } = useDeviceType();
  const navigate = useNavigate();
  return (
    <>
      <div css={styles.container(pageLabel, isMobile)}>
        <div css={styles.leftSection}>{left}</div>
        {/* <button onClick={() => navigate('/upload')}>upload</button>
        <button onClick={() => navigate('/loading')}>loading</button> */}
        <div css={styles.middleSection}>{middle}</div>
        <div css={styles.rightSection}>{right}</div>
      </div>
      {pageLabel === 'TotalEvaluation' && <div css={styles.placeHolder} />}
    </>
  );
}

export default HeaderNavigation;
