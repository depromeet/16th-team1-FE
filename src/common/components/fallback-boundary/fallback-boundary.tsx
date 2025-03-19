/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type ResetDetails =
  | { reason: 'imperative-api'; args: any[] }
  | { reason: 'keys'; prev: any[] | undefined; next: any[] | undefined };

interface FallbackBoundaryProps {
  errorBoundaryProps?: {
    fallbackUI?: ReactNode;
    onError?: (error: Error, info: React.ErrorInfo) => void;
    onReset?: (details: ResetDetails) => void | (() => void);
  };
  suspenseProps?: {
    fallbackUI?: ReactNode;
  };
  children: ReactNode;
}

export default function FallbackBoundary({
  children,
  errorBoundaryProps = {},
  suspenseProps = {},
}: FallbackBoundaryProps) {
  const { fallbackUI: errorFallbackUI = <div>에러</div>, onError, onReset } = errorBoundaryProps;
  const { fallbackUI: suspenseFallbackUI = <div>로딩</div> } = suspenseProps;

  return (
    <ErrorBoundary fallback={errorFallbackUI} onError={onError} onReset={onReset}>
      <Suspense fallback={suspenseFallbackUI}>{children}</Suspense>
    </ErrorBoundary>
  );
}
