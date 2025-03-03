import { createBrowserRouter } from 'react-router';

import TotalEvalutionPage from '@/features/total-evaluation/total-evaluation-page';
import UploadPage from '@/features/upload/upload-page';

import { Button } from './common/components/button/Button';
import Icon from './common/components/icon/icon';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Button
          size="large"
          usage="multi"
          icon={<Icon name="pin" width={24} />}
          iconPosition="left"
          variant="primary"
        >
          zzz
        </Button>

        <Button
          size="large"
          usage="multi"
          icon={<Icon name="pin" width={24} />}
          iconPosition="right"
          variant="primary"
        >
          zzz
        </Button>

        <Button size="large" usage="icon" icon={<Icon name="pin" width={24} />} variant="icon" />

        <Button size="medium" usage="text" variant="secondary">
          hello
        </Button>

        <Button
          size="small"
          usage="multi"
          icon={<Icon name="pin" width={24} />}
          iconPosition="left"
          variant="secondary"
        >
          hello
        </Button>

        <Button size="xxLarge" usage="text" variant="primary">
          helloasdasdsada
        </Button>
      </div>
    ),
  },
  {
    path: '/upload',
    element: <UploadPage />,
  },
  {
    path: '/total-evaluation',
    element: <TotalEvalutionPage />,
  },
]);
