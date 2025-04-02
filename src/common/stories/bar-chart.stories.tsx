import { Meta, StoryObj } from '@storybook/react';

import BarChart from '@/common/components/bar-chart/bar-chart';

const meta = {
  title: 'Components/BarChart',
  component: BarChart,
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 100, step: 1 } },
  },
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const Over: Story = {
  args: {
    value: 300,
  },
};
