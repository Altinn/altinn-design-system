import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { Popover, PopoverVariant } from './Popover';
import { PopoverContent } from './PopoverContent';
import { PopoverTrigger } from './PopoverTrigger';

const figmaLink = ''; // TODO: Add figma link

export default {
  title: `Components/Popover`,
  component: Popover,
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
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => {
  return (
    <div>
      <Popover variant={args.variant}>
        <PopoverTrigger>
          <div>Åpne</div>
        </PopoverTrigger>
        <PopoverContent>Popoverinnhold</PopoverContent>
      </Popover>
    </div>
  );
};

export const Warning = Template.bind({});
Warning.args = {
  variant: PopoverVariant.Warning,
};
Warning.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  variant: PopoverVariant.Error,
};
Error.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Neutral = Template.bind({});
Neutral.args = {
  variant: PopoverVariant.Neutral,
};
Neutral.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
