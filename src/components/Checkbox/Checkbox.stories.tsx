import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { Checkbox } from './Checkbox';

const figmaLink =
  'https://www.figma.com/file/d1VzAmoVdredZkky139AIT/ADS-3---Komponenter?node-id=190%3A13783';

export default {
  title: `Components/Checkbox`,
  component: Checkbox,
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
        <StoryPage description='Checkbox for boolean or multiple choice values in forms.' />
      ),
    },
  },
  args: {
    checked: false,
    compact: false,
    error: false,
    label: 'Tekst',
    readOnly: false,
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
  docs: {
    description: {
      story: 'This is the default checkbox.',
    },
  },
};

export const Checked = Template.bind({});
Checked.args = { checked: true };
Checked.parameters = {
  docs: {
    description: {
      story: 'This is a checked checkbox.',
    },
  },
};

export const Error = Template.bind({});
Error.args = { error: true };
Error.parameters = {
  docs: {
    description: {
      story:
        'This checkbox is supposed to be used when there is an user input error related to it.',
    },
  },
};

export const Compact = Template.bind({});
Compact.args = { compact: true };
Compact.parameters = {
  docs: {
    description: {
      story: 'This is the compact checkbox.',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
Disabled.parameters = {
  docs: {
    description: {
      story:
        'This is the disabled checkbox. Use this when the user is not supposed to change the value. Remember to make it clear for the user why it can not be changed.',
    },
  },
};

export const ReadOnly = Template.bind({});
ReadOnly.args = { readOnly: true };
ReadOnly.parameters = {
  docs: {
    description: {
      story: 'This is the read-only checkbox.',
    },
  },
};

export const WithDescription = Template.bind({});
WithDescription.args = { description: 'Lorem ipsum dolor sit amet.' };
WithDescription.parameters = {
  docs: {
    description: {
      story: 'This is a checkbox with description.',
    },
  },
};
