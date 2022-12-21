import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import { useArgs } from '@storybook/client-api';

import { StoryPage } from '@sb/StoryPage';

import { SearchField } from './SearchField';

const figmaLink =
  'https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723';

export default {
  title: `Components/SearchField`,
  component: SearchField,
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
    id: 'searchfield-story',
    disabled: false,
    label: 'Label',
  },
  argTypes: {
    onChange: { action: 'Value changed, perform search' },
  },
} as ComponentMeta<typeof SearchField>;

const Template: ComponentStory<typeof SearchField> = (args) => {
  const [{ disabled }] = useArgs();
  return (
    <SearchField
      disabled={disabled}
      {...args}
    />
  );
};

export const Example = Template.bind({});
Example.args = {};

Example.parameters = {
  docs: {
    description: {
      story: 'Search field.',
    },
  },
};
