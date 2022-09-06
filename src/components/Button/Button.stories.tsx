import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { Button, ButtonColor } from './Button';

const figmaLink =
  'https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2064%3A496';

export default {
  title: `Components/Button`,
  component: Button,
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
    children: `I'm a button`,
    onClick: (params) => {
      alert(`${JSON.stringify((params.target as Element).innerHTML)} clicked!`);
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: `Primary button`,
};
Primary.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
export const Submit = Template.bind({});
Submit.args = {
  children: `Submit button`,
  variant: ButtonColor.Submit,
};
Submit.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: `Secondary button`,
  variant: ButtonColor.Secondary,
};
Secondary.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
