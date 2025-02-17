import { useState } from 'react';

export default function TestComponent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div data-testid="hello-div">Hello</div>
      <div data-testid="test-count">{count}</div>
      <button data-testid="test-button" type="button" onClick={() => setCount((prev) => prev + 1)}>
        Count Up
      </button>
    </>
  );
}
