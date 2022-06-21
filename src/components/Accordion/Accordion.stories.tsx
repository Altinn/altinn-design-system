import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import { StoryPage } from '@sb/StoryPage';

import { Accordion } from './Accordion';
import type { AccordionContextProps } from './Context';
import { AccordionHeader } from './AccordionHeader';
import { AccordionContent } from './AccordionContent';
import cn from 'classnames';
import classes from './Accordion.stories.module.css';

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

  const AccordionExampleContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '+
  'Cras ut ultricies erat. Maecenas interdum euismod libero id sollicitudin.'+
  'id urna semper molestie nec in est. Ut in auctor est, eu euismod nulla. '+
  'Duis et malesuada risus. Duis condimentum mi vel massa elementum, eget'+
  'gravida orci lobortis. Ut imperdiet porttitor ligula at fringilla. '+
  'Praesent rhoncus neque id commodo commodo. Morbi tincidunt pulvinar'+
  ' ex sit amet tincidunt. Cras quis sapien maximus nisi vestibulum efficitur'+
   'nec nec massa. Nullam ornare mollis sapien, sed sodales magna tincidunt quis.';

  return (
    <div className={cn(classes['accordion-div-1'])}>
      <Accordion
        onChange={handleChange1}
        open={open1}
      >
        <AccordionHeader>Accordion 1</AccordionHeader>
        <AccordionContent>{AccordionExampleContent}</AccordionContent>
      </Accordion>
      <Accordion
        onChange={handleChange2}
        open={open2}
      >
        <AccordionHeader>Accordion 2</AccordionHeader>
        <AccordionContent>{AccordionExampleContent}</AccordionContent>
      </Accordion>
    </div>
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
