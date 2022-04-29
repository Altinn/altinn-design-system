import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
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
};
