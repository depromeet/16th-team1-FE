import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import Icon from '../icon/icon';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      description: '버튼의 크기를 결정합니다.',
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      description: '버튼의 색상 테마를 결정합니다.',
      control: { type: 'radio' },
      options: ['purlple', 'sora'],
    },
    usage: {
      table: { disable: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const TextButton: Story = {
  args: {
    variant: 'sora',
    children: 'hello',
    usage: 'text',
    size: 'small',
  },
};
export const IconButton: Story = {
  args: {
    variant: 'sora',
    usage: 'icon',
    size: 'small',
    icon: <Icon name="pin" width={24} />,
  },
};

export const MultiButton: Story = {
  args: {
    variant: 'purlple',
    children: 'hello',
    usage: 'multi',
    iconPosition: 'left',
    size: 'small',
    icon: <Icon name="pin" width={24} />,
  },
  argTypes: {
    iconPosition: {
      description: '아이콘의 위치를 조정합니다.',
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
  },
};
