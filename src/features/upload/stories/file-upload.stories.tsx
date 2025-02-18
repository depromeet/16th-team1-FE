import { Meta, StoryObj } from '@storybook/react';

import FileUpload from '../components/file-upload';

const meta = {
  title: 'Components/FileUpload',
  component: FileUpload,
  argTypes: {
    maxFiles: { control: 'number', description: '업로드 가능한 파일 개수' },
  },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxFiles: 1,
  },
};

export const Multiple: Story = {
  args: {
    maxFiles: 3,
  },
};

export const AcceptPDF: Story = {
  args: {
    maxFiles: 1,
    accept: '.pdf',
  },
};

export const FileSizeLimit: Story = {
  args: {
    accept: '.pdf',
    minSize: 1024 * 1024 * 1,
    maxSize: 1024 * 1024 * 2,
    onFilesChange: (files) => {
      console.log('files', files);
    },
  },
};

export const FilesChangeCallback: Story = {
  args: {
    accept: '.pdf',
    maxSize: 1024 * 1024 * 20,
    onFilesChange: (files) => {
      console.log('files', files);
    },
  },
};
