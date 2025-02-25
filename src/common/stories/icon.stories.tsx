import { css } from '@emotion/react';
import { Meta, StoryObj } from '@storybook/react';

import Icon from '@/common/components/icon/icon';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: 'text',
      description: '아이콘 이름',
    },
    width: {
      control: { type: 'number', min: 1, max: 100, step: 1 },
      description: '아이콘 크기 (width)',
    },
    color: {
      control: 'select',
      options: ['red', 'green', 'blue', 'black'],
      description: '아이콘 색상',
    },
    customStyle: {
      control: 'object',
      description: 'Emotion 스타일 적용',
    },
    onClick: {
      action: 'clicked',
      description: '아이콘 클릭 이벤트',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'checkIcon',
    width: 40,
    color: 'black',
  },
};

export const Clickable: Story = {
  args: {
    name: 'pin',
    width: 18,
    color: 'red',
    customStyle: css`
      transition:
        transform 0.2s ease-in-out,
        filter 0.2s ease-in-out;

      &:hover {
        transform: scale(1.2);
        filter: brightness(1.2);
      }
    `,
    onClick: () => console.log('Icon clicked!'),
  },
};
