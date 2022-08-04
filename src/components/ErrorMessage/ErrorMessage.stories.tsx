import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { ErrorMessage } from './ErrorMessage';

const figmaLink = ''; // TODO: Add figma link

export default {
  title: `Components/ErrorMessage`,
  component: ErrorMessage,
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
} as ComponentMeta<typeof ErrorMessage>;

const Template: ComponentStory<typeof ErrorMessage> = (args) => (
  <ErrorMessage {...args} />
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
