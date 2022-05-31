import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import { StoryPage } from '@sb/StoryPage';

import { ToggleButtonGroup } from './ToggleButtonGroup';
import { ToggleButton } from '../ToggleButton/ToggleButton';
import { useState } from 'react';

const figmaLink = ''; // TODO: Add figma link

export default {
  title: `Components/ToggleButtonGroup`,
  component: ToggleButtonGroup,
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
    children: [
      <ToggleButton
        key={0}
        label={'Venstre'}
        isActive={toggleIndex === 0 ? true : false}
        handleClick={() => console.log('Hey')}
      ></ToggleButton>,
      <ToggleButton
        key={1}
        label={'Høyre'}
        isActive={false}
        handleClick={() => console.log('Hey')}
      ></ToggleButton>,
    ],
  },
} as ComponentMeta<typeof ToggleButtonGroup>;

const Template: ComponentStory<typeof ToggleButtonGroup> = (args) => {
  const [toggleIndex, setToggleIndex] = useState(0);
  return <ToggleButtonGroup {...args} />;
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
