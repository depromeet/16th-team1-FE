import { css } from '@emotion/react';

import { Button } from './common/components/button';

function App() {
  return (
    <div>
      <Button>Default</Button>

      <Button variant="destructive" size="sm">
        Small + Destructive
      </Button>

      <Button
        variant="outline"
        size="lg"
        cssProps={css`
          background-color: gray;
          border: 10px solid green;
          font-size: 1.25rem;
        `}
        onClick={() => console.log('clicked!')}
      >
        Large +Outline + Override
      </Button>

      <Button variant="link" asChild>
        <a href="https://example.com" target="_blank" rel="noreferrer">
          External Link
        </a>
      </Button>
    </div>
  );
}

export default App;
