import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import { useArgs } from '@storybook/client-api';
import cn from 'classnames';

import { StoryPage } from '@sb/StoryPage';

import { Button, ButtonVariant } from '../Button';

import { Accordion } from './Accordion';
import { AccordionHeader } from './AccordionHeader';
import { AccordionContent } from './AccordionContent';
import classes from './Accordion.stories.module.css';
import { AccordionIconVariant } from './Context';

const figmaLink = ''; // TODO: Add figma link

export default {
  title: `Components/Accordion`,
  component: Accordion,
  subcomponents: { AccordionHeader, AccordionContent },
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
    variant: AccordionIconVariant.Primary,
    button1: true,
    button2: true,
    endText: 'Noe info her',
    subtitle: 'Undertekst',
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const AccordionExampleContent =
    'Accordion-innhold uten css for å tilrettelegge for selvalgt styling';

  const [{ button1 }] = useArgs();
  const [{ button2 }] = useArgs();
  const [{ endText }] = useArgs();
  const [{ subtitle }] = useArgs();

  const ActionButton1 = button1 ? (
    <Button variant={ButtonVariant.Primary}>Separat knapp 1</Button>
  ) : undefined;

  const ActionButton2 = button2 ? (
    <Button variant={ButtonVariant.Secondary}>Separat knapp 2</Button>
  ) : undefined;

  const InfoText = endText.length > 0 ? endText : undefined;

  const SubtitleText = subtitle.length > 0 ? subtitle : undefined;

  return (
    <div className={cn(classes['container'])}>
      <Accordion
        onClick={handleClick1}
        open={open1}
        iconVariant={args.iconVariant}
        headerTitle='Accordian 1'
        headerButton1={ActionButton1}
        headerButton2={ActionButton2}
        endText={InfoText}
        subtitle={SubtitleText}
      >
        <AccordionContent>{AccordionExampleContent}</AccordionContent>
      </Accordion>
      <Accordion
        onClick={handleClick2}
        open={open2}
        iconVariant={args.iconVariant}
        headerTitle='Accordian 2'
        headerButton1={ActionButton1}
        headerButton2={ActionButton2}
        endText={InfoText}
        subtitle={SubtitleText}
      >
        <AccordionContent>{AccordionExampleContent}</AccordionContent>
      </Accordion>
    </div>
  );
};

export const Example = Template.bind({});
Example.args = {
  iconVariant: AccordionIconVariant.Primary,
};
Example.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
