import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { ReadOnlyVariant } from '../_InputWrapper';

import { TextArea } from './TextArea';

const figmaLink =
  'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21857';

export default {
  title: `Components/TextArea`,
  component: TextArea,
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
    label: 'Label',
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    description: {
      story: 'Regular textarea.',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  isValid: false,
};
Error.parameters = {
  docs: {
    description: {
      story: 'Textarea displaying error.',
    },
  },
};

export const ReadOnlyInfo = Template.bind({});
ReadOnlyInfo.args = {
  readOnly: true,
  value: 'Some text',
};
ReadOnlyInfo.parameters = {
  docs: {
    description: {
      story: 'Textarea as readonly-info.',
    },
  },
};

export const ReadOnlyConfirm = Template.bind({});
ReadOnlyConfirm.args = {
  readOnly: ReadOnlyVariant.ReadOnlyConfirm,
  value: 'Some text',
};
ReadOnlyConfirm.parameters = {
  docs: {
    description: {
      story: 'Textarea as readonly-confirm.',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value: 'Some text',
};
Disabled.parameters = {
  docs: {
    description: {
      story: 'Textarea as disabled.',
    },
  },
};
