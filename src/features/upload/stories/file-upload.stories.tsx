import { Meta, StoryObj } from '@storybook/react';

import FileUpload from '@/features/upload/components/file-upload/file-upload';

const meta = {
  title: 'Components/FileUpload',
  component: FileUpload,
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: () => {
      console.log('submitted');
    },
  },
};
