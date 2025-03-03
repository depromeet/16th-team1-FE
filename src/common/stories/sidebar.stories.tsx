import { ThemeProvider } from '@emotion/react';
import { Meta, StoryObj } from '@storybook/react';

import { theme } from '@/assets/styles/theme';
import SelectedPageProvider from '@/features/total-evaluation/components/context/selected-page/selected-page-provider';
import SidebarProvider from '@/features/total-evaluation/components/context/sidebar/sidebar-provider';
import FeedbackSidebar from '@/features/total-evaluation/components/feedback-sidebar/feedback-sidebar';

const meta: Meta<typeof FeedbackSidebar> = {
  title: 'Components/FeedbackSidebar',
  component: FeedbackSidebar,
};

export default meta;

type Story = StoryObj<typeof FeedbackSidebar>;

export const Default: Story = () => (
  <SidebarProvider>
    <SelectedPageProvider>
      <ThemeProvider theme={theme}>
        <FeedbackSidebar />
      </ThemeProvider>
    </SelectedPageProvider>
  </SidebarProvider>
);

Default.args = {};
