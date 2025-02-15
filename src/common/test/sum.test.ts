import { describe, test, expect } from 'vitest';

const sum = (a: number, b: number) => {
  return a + b;
};

describe('sum', () => {
  test('1 + 1은 2이다.', () => {
    expect(sum(1, 1)).toBe(2);
  });
  test('2 + 2는 4이다.', () => {
    expect(sum(2, 2)).toBe(4);
  });
});
