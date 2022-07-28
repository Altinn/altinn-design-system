import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { Button } from '../Button';

import { Popover } from './Popover';
import { PopoverContent } from './PopoverContent';
import { PopoverTrigger } from './PopoverTrigger';
import { PopoverPortal } from './PopoverPortal';
import { PopoverVariant } from './Context';

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

const Template: ComponentStory<typeof Popover> = () => {
  return (
    <Popover popoverVariant={PopoverVariant.Yellow}>
      <PopoverTrigger asChild>
        <Button>Knapp</Button>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent>
          <div>Div</div>
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  );
};

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
