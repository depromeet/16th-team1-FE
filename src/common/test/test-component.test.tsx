import { queryByTestId, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeAll, expect, test } from 'vitest';

import TestComponent from '@/common/components/test-component/test-component';

beforeAll(() => {
  render(<TestComponent />);
});

test('test-component가 화면에 그려짐', () => {
  expect(queryByTestId(document.documentElement, 'hello-div')).toBeInTheDocument();
});

test('버튼 클릭 시 Count가 1씩 증가함', async () => {
  const user = userEvent.setup();

  const buttonElement = queryByTestId(document.documentElement, 'test-button');
  const countElement = queryByTestId(document.documentElement, 'test-count');

  if (!buttonElement || !countElement) return;

  await user.click(buttonElement);

  expect(countElement.textContent).toBe('1');

  await user.click(buttonElement);

  expect(countElement.textContent).toBe('2');
});
