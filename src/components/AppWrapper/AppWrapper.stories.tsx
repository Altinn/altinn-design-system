import type { Meta, StoryObj } from '@storybook/react';

import { AppWrapper } from '@/components';

const meta: Meta<typeof AppWrapper> = {
  component: AppWrapper,
};

export default meta;

type Story = StoryObj<typeof AppWrapper>;

export const App: Story = {
  args: {},
};
