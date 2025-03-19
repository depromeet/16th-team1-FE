/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Skeleton from '../skeleton/skeleton';

type ResetDetails =
  | { reason: 'imperative-api'; args: any[] }
  | { reason: 'keys'; prev: any[] | undefined; next: any[] | undefined };

interface FallbackBoundaryProps {
  error?: {
    fallbackUI?: ReactNode;
    onError?: (error: Error, info: ErrorInfo) => void;
    onReset?: (details: ResetDetails) => void | VoidFunction;
  };
  suspense?: {
    fallbackUI?: ReactNode;
  };
  children: ReactNode;
}

export default function FallbackBoundary({
  children,
  error = {},
  suspense = {},
}: FallbackBoundaryProps) {
  const { fallbackUI: errorFallbackUI = <Skeleton />, onError, onReset } = error;
  const { fallbackUI: suspenseFallbackUI = <Skeleton /> } = suspense;

  return (
    <ErrorBoundary fallback={errorFallbackUI} onError={onError} onReset={onReset}>
      <Suspense fallback={suspenseFallbackUI}>{children}</Suspense>
    </ErrorBoundary>
  );
}
