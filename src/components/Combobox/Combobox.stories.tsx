import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import { StoryPage } from '@sb/StoryPage';

import { Combobox } from './Combobox';

const figmaLink =
  'https://www.figma.com/file/VAvGOqkMhKM8HL8h4xBeDH7b/Re-design-Altinn-Studio?node-id=2039%3A87921';

export default {
  title: `Components/Combobox`,
  component: Combobox,
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
    inputId: 'some-input-id',
    options: [
      {
        value: 'yolo',
        label: (
          <div>
            <b>Yo</b> lo
          </div>
        ),
      },
      {
        value: 'golo',
        label: (
          <div>
            <b>Go</b> lo
          </div>
        ),
      },
      {
        value: 'holo',
        label: (
          <div>
            <b>Ho</b> lo
          </div>
        ),
      },
    ],
  },
} as ComponentMeta<typeof Combobox>;

const Template: ComponentStory<typeof Combobox> = (args) => (
  <>
    <label htmlFor={'above-input'}>Input above</label>
    <input
      id={'above-input'}
      type='text'
    />
    <label htmlFor={args.inputId}>The combobox</label>
    <Combobox {...args} />
    <label htmlFor={'below-input'}>Input above</label>
    <input
      id={'below-input'}
      type='text'
    />
  </>
);

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
