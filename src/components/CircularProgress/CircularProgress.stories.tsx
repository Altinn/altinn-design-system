import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import { StoryPage } from '@sb/StoryPage';

import { CircularProgress } from './CircularProgress';

const figmaLink =
  'https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=17152%3A33460';

export default {
  title: `Components/CircularProgress`,
  component: CircularProgress,
  parameters: {
    design: config([
      {
        type: 'figma',
        url: figmaLink,
      },
      {
        type: 'link',
        url: figmaLink,
      },
    ]),
    docs: {
      page: () => (
        <StoryPage
          description={`TODO: Add a description (supports markdown)`}
        />
      ),
    },
  },
  args: {
    //TODO: Add default args
  },
} as ComponentMeta<typeof CircularProgress>;

const CircularTemplate: ComponentStory<typeof CircularProgress> = (args) => (
  <CircularProgress {...args} />
);

export const SimpleExample = CircularTemplate.bind({});
SimpleExample.args = {
  width: 100,
  value: 75,
};

const CircularWithLabelTemplate: ComponentStory<typeof CircularProgress> = (
  args,
) => (
  <div style={{ position: 'relative', width: '200px', textAlign: 'center' }}>
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress {...args} />
    </div>
    <h1>35%</h1>
  </div>
);

export const CircularWithLabel = CircularWithLabelTemplate.bind({});
CircularWithLabel.args = {
  width: 100,
  value: 35,
};
