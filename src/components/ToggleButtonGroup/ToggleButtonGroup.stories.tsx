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
    children: 'Verdi',
    value: 'left',
  },
} as ComponentMeta<typeof ToggleButtonGroup>;

const Template: ComponentStory<typeof ToggleButtonGroup> = (args) => {
  const [selected, setSelected] = useState('left');

  const handleChange = ({ selectedValue }) => {
    setSelected(selectedValue);
  };

  return (
    <ToggleButtonGroup onChange={handleChange} selectedValue={selected}>
      <ToggleButton value='left'>Venstre valg</ToggleButton>
      <ToggleButton value='right'>Høyre valg</ToggleButton>
    </ToggleButtonGroup>
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
