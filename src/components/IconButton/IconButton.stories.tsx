import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { ReactComponent as HelpIcon } from './HelpIcon.svg';
import { IconButton } from './IconButton';

const figmaLink = ''; // TODO: Add figma link

export default {
  title: `Components/IconButton`,
  component: IconButton,
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
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = () => (
  <IconButton>
    <HelpIcon
      width='20'
      height='20'
    />
  </IconButton>
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
