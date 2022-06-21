import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import { StoryPage } from '@sb/StoryPage';

import { Accordion } from './Accordion';
import type { AccordionContextProps } from './Context';
import { AccordionHeader } from './AccordionHeader';
import { AccordionContent } from './AccordionContent';

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
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleChange1 = ({ open: isOpen }: AccordionContextProps) => {
    setOpen1(!isOpen);
  };

  const handleChange2 = ({ open: isOpen }: AccordionContextProps) => {
    setOpen2(!isOpen);
  };

  return (
    <>
      <Accordion
        onChange={handleChange1}
        open={open1}
      >
        <AccordionHeader open={open1}> {'>'} Accordion 1</AccordionHeader>
        <AccordionContent open={open1}>Accordion content 1</AccordionContent>
      </Accordion>
      <Accordion
        onChange={handleChange2}
        open={open2}
      >
        <AccordionHeader open={open2}> {'>'} Accordion 2</AccordionHeader>
        <AccordionContent open={open2}>Accordion content 2</AccordionContent>
      </Accordion>
    </>
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
