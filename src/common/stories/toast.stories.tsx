import Toast from '@common/components/toast/toast';
import { toastConfig, ToastType } from '@common/components/toast/toast-config';
import { css } from '@emotion/react';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';

const toastOptions = Object.keys(toastConfig) as ToastType[];

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    name: {
      control: 'select',
      options: toastOptions,
      description: '토스트 메시지 타입 선택',
    },
    open: {
      control: 'boolean',
      description: '토스트 메시지 표시 여부',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    name: 'aiCompleteLarge',
    open: false,
  },
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs();
    const onClick =
      args.name === 'aiCompleteLarge'
        ? () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            updateArgs({ open: false });
          }
        : undefined;

    return (
      <div
        css={css`
          height: 200vh;
        `}
      >
        <Toast
          name={args.name}
          open={open}
          setOpen={(value) => updateArgs({ open: value })}
          onClick={onClick}
        />
      </div>
    );
  },
};
