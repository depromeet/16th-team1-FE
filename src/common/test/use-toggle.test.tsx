import { act, renderHook } from '@testing-library/react';
import { expect, test } from 'vitest';

import { useToggle } from '../hooks/use-toggle';

test('open의 초기값은 false이다.', () => {
  const { result } = renderHook(() => useToggle());

  expect(result.current[0]).toBe(false);
});

test('setOpen 함수를 사용해 open 값을 true로 변경할 수 있다.', () => {
  const { result } = renderHook(() => useToggle());

  act(() => result.current[1](true));

  expect(result.current[0]).toBe(true);
});
