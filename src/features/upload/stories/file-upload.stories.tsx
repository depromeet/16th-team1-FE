import { Meta, StoryObj } from '@storybook/react';

import FileUpload from '../components/file-upload/file-upload';

const meta = {
  title: 'Components/FileUpload',
  component: FileUpload,
  argTypes: {
    maxFiles: { control: 'number', description: '업로드 가능한 파일 개수' },
  },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
