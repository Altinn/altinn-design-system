import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Panel, PanelVariant } from './Panel';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Panel',
  component: Panel,
} as ComponentMeta<typeof Panel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Panel> = (args) => (
  <Panel {...args} />
);

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  title: 'Her er litt ekstra info',
  children: <div>child</div>,
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  children: <div>child</div>,
  title: 'Her er litt ekstra info',
  variant: PanelVariant.Warning,
};
