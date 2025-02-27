import { Meta, StoryObj } from '@storybook/react';

import ProgressBar from '@/common/components/progress-bar/progress-bar';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    status: { control: { type: 'radio', options: ['success', 'warning'] } },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    value: 98,
    status: 'success',
  },
};

export const Warning: Story = {
  args: {
    value: 8,
    status: 'warning',
  },
};
