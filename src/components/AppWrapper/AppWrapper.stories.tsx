import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import { StoryPage } from '@sb/StoryPage';

import { AppWrapper } from './AppWrapper';

const figmaLink = ''; // TODO: Add figma link

export default {
  title: `Components/AppWrapper`,
  component: AppWrapper,
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
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
          showStories={false}
          description={`AppWrapper sørger for å laste eksterne globale styles (f.eks font-family),
og css variabler som kommer fra Figma Tokens.
For å få andre komponenter til å virke som de skal må du derfor bruke AppWrapper.
Denne komponenten bør lastes kun én gang, og så høyt opp i React treet som mulig.`}
        />
      ),
    },
  },
} as ComponentMeta<typeof AppWrapper>;

const Template: ComponentStory<typeof AppWrapper> = (args) => (
  <AppWrapper {...args} />
);

export const Example = Template.bind({});
