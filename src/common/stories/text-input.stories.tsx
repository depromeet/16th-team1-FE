import { Meta, StoryObj } from '@storybook/react';

import TextInput from '../components/text-input/text-input';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    width: {
      description: 'TextInput의 너비를 결정합니다. (default: 100%)',
      control: { type: 'number' },
    },
    height: {
      description: 'TextInput의 높이를 결정합니다. (default: auto)',
      control: { type: 'number' },
    },
    placeholder: {
      description: 'TextInput의 placeholder를 설정합니다.',
      control: { type: 'text' },
    },
    value: {
      description: 'TextInput의 value를 설정합니다. (value가 있는 경우 data-has-value 속성이 true)',
      control: { type: 'text' },
    },
    status: {
      description: 'TextInput의 상태를 결정합니다.',
      control: 'radio',
      options: ['error'],
    },
    message: {
      description: 'TextInput의 상태에 따른 문구를 설정합니다.',
      control: 'text',
    },
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    placeholder: 'placeholder',
  },
};

export const Typed: Story = {
  args: {
    placeholder: 'placeholder',
    value: 'typed',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'placeholder',
    status: 'error',
    message: 'error message',
  },
};
