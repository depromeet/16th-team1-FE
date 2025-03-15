import { PageLabelKey } from '@/common/constants/path';
import useDeviceType from '@/common/hooks/use-device-type';
import { useHederContents } from '@/common/hooks/use-heder-contents';

import * as styles from './header-navigation-layout.styles';

interface HeaderNavigationProps {
  pageLabel: PageLabelKey;
}

function HeaderNavigation({ pageLabel }: HeaderNavigationProps) {
  const { left, middle, right } = useHederContents(pageLabel);
  const deviceState = useDeviceType();
  return (
    <>
      <div css={styles.container(pageLabel, deviceState.isDesktop)}>
        <div css={styles.leftSection}>{left}</div>
        <div css={styles.middleSection}>{middle}</div>
        <div css={styles.rightSection}>{right}</div>
      </div>
      {pageLabel === 'TotalEvaluation' && <div css={styles.placeHolder} />}
    </>
  );
}

export default HeaderNavigation;
