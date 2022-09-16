import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  layout: 'centered',
  darkMode: {
    current: 'light',
    dark: {
      ...themes.dark,
    },
    light: {
      ...themes.normal,
    },
  },
  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'default',
        value: '#979797',
      },
      {
        name: 'light',
        value: '#F8F8F8',
      },
      {
        name: 'dark',
        value: '#333333',
      },
    ],
  },
};
