// @ts-check

const Path = require('path');
const AppSourceDir = Path.join(__dirname, '..', 'src');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-turbo-build',
    'storybook-dark-mode',
  ],
  core: {
    builder: 'webpack5',
  },
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    const svgRule = config.module.rules.find((rule) =>
      'test.svg'.match(rule.test),
    );

    svgRule.exclude = [AppSourceDir];

    config.module.rules.push({
      test: /\.svg$/i,
      include: [AppSourceDir],
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            exportType: 'named',
          },
        },
      ],
    });

    return config;
  },
};
