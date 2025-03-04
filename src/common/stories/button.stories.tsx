import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/button/Button';
import Icon from '../components/icon/icon';

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
      options: ['primary', 'secondary', 'text', 'icon'],
    },
    usage: {
      table: { disable: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const TextSmallButton: Story = {
  args: {
    variant: 'primary',
    children: 'text-small-primary',
    usage: 'text',
    size: 'small',
  },
};

export const TextXXLargeButton: Story = {
  args: {
    variant: 'primary',
    children: 'text-XXLarge-primary',
    usage: 'text',
    size: 'xxLarge',
  },
};
export const IconMediumButton: Story = {
  args: {
    variant: 'icon',
    usage: 'icon',
    size: 'medium',
    icon: <Icon name="pin" width={24} />,
  },
};

export const MultiLeftLargeButton: Story = {
  args: {
    variant: 'secondary',
    children: 'multi-large-secondary-left',
    usage: 'multi',
    iconPosition: 'left',
    size: 'large',
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
