import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InformationPanel, InformationPanelVariant } from './InformationPanel';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/InformationPanel',
  component: InformationPanel,
} as ComponentMeta<typeof InformationPanel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InformationPanel> = (args) => (
  <InformationPanel {...args} />
);

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  children: <div>child</div>,
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  children: <div>child</div>,
  variant: InformationPanelVariant.Warning,
};
