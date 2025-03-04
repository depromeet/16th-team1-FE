import { Meta, StoryObj } from '@storybook/react';

import FeedbackSidebar from '@/features/total-evaluation/components/feedback-sidebar/feedback-sidebar';

const meta: Meta<typeof FeedbackSidebar> = {
  title: 'Components/FeedbackSidebar',
  component: FeedbackSidebar,
};

export default meta;

type Story = StoryObj<typeof FeedbackSidebar>;

export const Default: Story = () => <FeedbackSidebar />;

Default.args = {};
