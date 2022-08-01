import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { Button } from '../Button';

import { Popover, PopoverVariant } from './Popover';
import { PopoverContent } from './PopoverContent';
import { PopoverTrigger } from './PopoverTrigger';
import { PopoverTriggerElement } from './PopoverTriggerElement';
import { PopoverArrow } from './PopoverArrow';

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
      <Popover popoverVariant={args.popoverVariant}>
        <PopoverTrigger asChild>
          <PopoverTriggerElement>
            <Button>Åpne</Button>
          </PopoverTriggerElement>
        </PopoverTrigger>
        <PopoverContent>
          Popoverinnhold
          <PopoverArrow></PopoverArrow>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export const Yellow = Template.bind({});
Yellow.args = {
  popoverVariant: PopoverVariant.Yellow,
};
Yellow.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Red = Template.bind({});
Red.args = {
  popoverVariant: PopoverVariant.Red,
};
Red.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const White = Template.bind({});
White.args = {
  popoverVariant: PopoverVariant.White,
};
White.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
