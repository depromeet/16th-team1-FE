import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Icon from '@/common/components/icon/icon';
import useDeviceType from '@/common/hooks/use-device-type';
import { getImageUrl } from '@/common/utils/get-image-url';

import * as styles from './projects-styles';
import { PROCESS_COLOR } from '../../constants/colors';

interface ProjectsProps {
  imageUrl: string;
  feedbackDescription: string;
  feedbackType: string;
  process: string;
}

export default function Projects({
  imageUrl,
  feedbackType,
  feedbackDescription,
  process,
}: ProjectsProps) {
  const { isMobile } = useDeviceType();

  return (
    <div css={styles.container}>
      <div css={styles.imageContainer}>
        <div css={styles.imageWrapper}>
          <img
            src={getImageUrl(imageUrl)}
            alt="프로젝트 피드백"
            onLoad={() => ScrollTrigger.refresh()}
          />
        </div>
        <div css={styles.description}>{feedbackDescription}</div>
      </div>
      <div css={styles.process}>
        <div css={styles.iconWrapper(PROCESS_COLOR[process])}>
          {process === 'GOOD' && <Icon name="check" width={isMobile ? 32 : 56} />}
          {process === 'SOSO' && <Icon name="triangle" width={isMobile ? 32 : 56} />}
          {process === 'BAD' && <Icon name="x" width={isMobile ? 32 : 56} />}
        </div>
        <span css={styles.feedbackType}>{feedbackType}</span>
        <HorizontalSvg />
      </div>
    </div>
  );
}

function HorizontalSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="4"
      viewBox="0 0 1030 4"
      fill="none"
    >
      <path d="M0 1.72119L1030 1.72128" stroke="url(#paint0_linear_2245_905)" strokeWidth="3" />
      <defs>
        <linearGradient
          id="paint0_linear_2245_905"
          x1="-4.37114e-08"
          y1="2.22119"
          x2="1030"
          y2="2.22128"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0A0A0C" />
          <stop offset="0.5" stopColor="#25262A" />
          <stop offset="1" stopColor="#0A0A0C" />
        </linearGradient>
      </defs>
    </svg>
  );
}
