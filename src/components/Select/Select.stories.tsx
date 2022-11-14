import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import type {
  MultiSelectOption,
  MultiSelectProps,
  SingleSelectOption,
  SingleSelectProps,
} from './Select';
import { Select } from './Select';

const figmaLink =
  'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627';

const defaultOptions: SingleSelectOption[] = [
  { label: 'Agder', value: 'Agder' },
  { label: 'Innlandet', value: 'Innlandet' },
  { label: 'Møre og Romsdal', value: 'Møre og Romsdal' },
  { label: 'Nordland', value: 'Nordland' },
  { label: 'Oslo', value: 'Oslo' },
  { label: 'Rogaland', value: 'Rogaland' },
  { label: 'Vestfold og Telemark', value: 'Vestfold og Telemark' },
  { label: 'Troms og Finnmark', value: 'Troms og Finnmark' },
  { label: 'Trøndelag', value: 'Trøndelag' },
  { label: 'Vestland', value: 'Vestland' },
  { label: 'Viken', value: 'Viken' },
];

const multipleSelectOptions: MultiSelectOption[] = defaultOptions.map(
  (option) => ({ ...option, deleteButtonLabel: 'Slett ' + option.label }),
);

const defaultArgs: SingleSelectProps = {
  label: 'Velg et fylke',
  multiple: false,
  options: defaultOptions,
};

const multipleSelectArgs: MultiSelectProps = {
  deleteButtonLabel: 'Fjern alle',
  label: 'Velg ett eller flere fylker',
  multiple: true,
  options: multipleSelectOptions,
};

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
  args: defaultArgs,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
);

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
Multiple.args = multipleSelectArgs;
Multiple.parameters = {
  docs: {
    description: {
      story:
        'This is a select box with the possibility to choose multiple values, like `<select multiple>` in html. It has an `onChange` property hat accepts a function which will receive a list of the selected values each time it is changed.',
    },
  },
};

export const MultipleDisabled = Template.bind({});
MultipleDisabled.args = { ...multipleSelectArgs, disabled: true };
MultipleDisabled.parameters = {
  docs: {
    description: {
      story:
        'This is a disabled, multiple select box. Remember to make it clear for the user why it is disabled.',
    },
  },
};

export const MultipleError = Template.bind({});
MultipleError.args = { ...multipleSelectArgs, error: true };
MultipleError.parameters = {
  docs: {
    description: {
      story:
        'This is a multiple select box in the error state. Remember to use it together with an error message that explains why there is an error.',
    },
  },
};
