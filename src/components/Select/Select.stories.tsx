import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import type { MultiSelectOption, SingleSelectOption } from './Select';
import { Select } from './Select';

const figmaLink =
  'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627';

const defaultOptions: SingleSelectOption[] = [
  { displayName: 'Agder', value: 'Agder' },
  { displayName: 'Innlandet', value: 'Innlandet' },
  { displayName: 'Møre og Romsdal', value: 'Møre og Romsdal' },
  { displayName: 'Nordland', value: 'Nordland' },
  { displayName: 'Oslo', value: 'Oslo' },
  { displayName: 'Rogaland', value: 'Rogaland' },
  { displayName: 'Vestfold og Telemark', value: 'Vestfold og Telemark' },
  { displayName: 'Troms og Finnmark', value: 'Troms og Finnmark' },
  { displayName: 'Trøndelag', value: 'Trøndelag' },
  { displayName: 'Vestland', value: 'Vestland' },
  { displayName: 'Viken', value: 'Viken' },
];

const multipleSelectOptions: MultiSelectOption[] = defaultOptions.map(
  (option) => ({ ...option, deleteButtonLabel: 'Slett ' + option.displayName }),
);

export default {
  title: `Components/Select`,
  component: Select,
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
    options: defaultOptions,
    multiple: false,
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Single = Template.bind({});
Single.args = {};
Single.parameters = {
  docs: {
    description: {
      story:
        'This is the default select box. It only allows one option to be selected, like `<select>` in html. It has an `onChange` property hat accepts a function which will receive the selected value each time it is changed.',
    },
  },
};

export const SingleDisabled = Template.bind({});
SingleDisabled.args = { disabled: true };
SingleDisabled.parameters = {
  docs: {
    description: {
      story:
        'This is a disabled, single select box. Remember to make it clear for the user why it is disabled.',
    },
  },
};

export const SingleError = Template.bind({});
SingleError.args = { error: true };
SingleError.parameters = {
  docs: {
    description: {
      story:
        'This is a single select box in the error state. Remember to use it together with an error message that explains why there is an error.',
    },
  },
};

export const Multiple = Template.bind({});
Multiple.args = { multiple: true, options: multipleSelectOptions };
Multiple.parameters = {
  docs: {
    description: {
      story:
        'This is a select box with the possibility to choose multiple values, like `<select multiple>` in html. It has an `onChange` property hat accepts a function which will receive a list of the selected values each time it is changed.',
    },
  },
};

export const MultipleDisabled = Template.bind({});
MultipleDisabled.args = { disabled: true };
MultipleDisabled.parameters = {
  docs: {
    description: {
      story:
        'This is a disabled, multiple select box. Remember to make it clear for the user why it is disabled.',
    },
  },
};

export const MultipleError = Template.bind({});
MultipleError.args = { error: true };
MultipleError.parameters = {
  docs: {
    description: {
      story:
        'This is a multiple select box in the error state. Remember to use it together with an error message that explains why there is an error.',
    },
  },
};
