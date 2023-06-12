import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoryPage } from '@sb/StoryPage';

import { _COMPONENT_ } from './_COMPONENT_';

export default {
  component: _COMPONENT_,
  parameters: {
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
} as ComponentMeta<typeof _COMPONENT_>;

const Template: ComponentStory<typeof _COMPONENT_> = (args) => (
  <_COMPONENT_ {...args} />
);

export const Example = Template.bind({});
Example.args = {
  // TODO: Add story specific args
};
Example.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
