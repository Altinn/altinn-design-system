import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { PanelVariant } from '../Panel';

import { PopoverPanel, PopoverPlacement } from './PopoverPanel';

const figmaLink = ''; // TODO: Add figma link

export default {
  title: `Components/PopoverPanel`,
  component: PopoverPanel,
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
    title: 'Tittel',
    variant: PanelVariant.Warning,
    trigger: <button>Åpne</button>,
    placement: PopoverPlacement.Top,
  },
} as ComponentMeta<typeof PopoverPanel>;

const Template: ComponentStory<typeof PopoverPanel> = (args) => (
  <div>
    <PopoverPanel {...args}>
      <div>Her kommer litt informasjon</div>
    </PopoverPanel>
  </div>
);
export const Success = Template.bind({});
Success.args = {
  variant: PanelVariant.Success,
  placement: PopoverPlacement.Top,
};
Success.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Info = Template.bind({});
Info.args = {
  variant: PanelVariant.Info,
  placement: PopoverPlacement.Top,
};
Info.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Warning = Template.bind({});
Warning.args = {
  variant: PanelVariant.Warning,
  placement: PopoverPlacement.Top,
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
  variant: PanelVariant.Error,
  placement: PopoverPlacement.Top,
};
Error.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
