import { css } from '@emotion/react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

interface ProgressBarProps {
  value: number;
  status?: 'success' | 'warning';
}

export default function ProgressBar({ value, status = 'success' }: ProgressBarProps) {
  const progressContainer = css`
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 0.8rem;
    border-radius: 0.4rem;
    background-color: #e0e0e0;
  `;

  const progressBar = css`
    width: ${value}%;
    height: 100%;
    transition: width 0.3s ease;
    background-color: ${status === 'warning' ? '#FFA500' : '#4CAF50'};
  `;

  return (
    <ProgressPrimitive.Root value={value} css={progressContainer}>
      <ProgressPrimitive.Indicator css={progressBar} />
    </ProgressPrimitive.Root>
  );
}
