import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import { StoryPage } from '@sb/StoryPage';

import { Accordion } from './Accordion';
import type { AccordionChangeProps } from './Accordion';

const figmaLink = ''; // TODO: Add figma link

export default {
  title: `Components/Accordion`,
  component: Accordion,
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
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = () => {
  const [collapse, setCollapse] = useState(true);

  const handleCollapse = ({ isCollapsed: isCollapsed }: AccordionChangeProps) =>
  {
    setCollapse(isCollapsed);
  };

  return (
    <Accordion onCollapse={handleCollapse} isCollapsed={collapse} children={<div>Test</div>}>

    </Accordion>
  );
}


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
