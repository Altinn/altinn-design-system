import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoryPage } from '@sb/StoryPage';

import { CircularProgress } from './CircularProgress';

export default {
  component: CircularProgress,
  parameters: {
    docs: {
      page: () => (
        <StoryPage
          description={`TODO: Add a description (supports markdown)`}
        />
      ),
    },
  },
} as ComponentMeta<typeof CircularProgress>;

const CircularTemplate: ComponentStory<typeof CircularProgress> = (args) => (
  <CircularProgress {...args} />
);

export const SimpleExample = CircularTemplate.bind({});
SimpleExample.args = {
  width: 100,
  value: 60,
  label: '3/5',
  id: 'progress',
};
