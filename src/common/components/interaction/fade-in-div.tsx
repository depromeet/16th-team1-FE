import { ReactNode, forwardRef } from 'react';

import { SerializedStyles } from '@emotion/react';

import * as styles from './fade-in-div.styles';

interface FadeInDivProps {
  inView: boolean;
  delay?: number;
  children: ReactNode;
  additionalStyles?: SerializedStyles;
}

const FadeInDiv = forwardRef<HTMLDivElement, FadeInDivProps>(
  ({ inView, delay = 0, children, additionalStyles }, ref) => {
    return (
      <div ref={ref} css={[styles.fadeInDiv(inView, delay), additionalStyles]}>
        {children}
      </div>
    );
  },
);

FadeInDiv.displayName = 'FadeInDiv';

export default FadeInDiv;
