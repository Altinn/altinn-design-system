import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { ReactComponent as ExitIcon } from './ExitUnstyled.svg';
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
  args: {},
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton
    icon={args.icon}
    onClick={() => {
      return alert('IconButton clicked');
    }}
  ></IconButton>
);

export const Close = Template.bind({});
Close.args = {
  icon: <ExitIcon />,
};
Close.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
