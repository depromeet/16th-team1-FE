import { css } from '@emotion/react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

interface ProgressBarProps {
  value: number;
  status?: 'success' | 'warning';
}

export default function ProgressBar({ value, status = 'success' }: ProgressBarProps) {
  const progressContainer = css`
    position: relative;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background-color: #e0e0e0;
    overflow: hidden;
  `;

  const progressBar = css`
    height: 100%;
    width: ${value}%;
    background-color: ${status === 'warning' ? '#FFA500' : '#4CAF50'};
    transition: width 0.3s ease;
  `;

  return (
    <ProgressPrimitive.Root value={value} css={progressContainer}>
      <ProgressPrimitive.Indicator css={progressBar} />
    </ProgressPrimitive.Root>
  );
}
