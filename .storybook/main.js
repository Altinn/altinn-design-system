// @ts-check

const Path = require('node:path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const { logger } = require('@storybook/node-logger');

const AppSourceDir = Path.join(__dirname, '..', 'src');
const StorybookSourceDir = Path.join(__dirname);

module.exports = {
  stories: ['../docs/**/*.stories.mdx', '../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
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
    disableTelemetry: true,
  },
  framework: '@storybook/react',
  webpackFinal: async (config) => {

    const svgRule = config.module.rules.find((rule) => {
      return rule.test && rule.test.test('test.svg');
    });

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

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': AppSourceDir,
      '@sb': StorybookSourceDir,
    };

    config.plugins = [...config.plugins, new NodePolyfillPlugin()];

    return config;
  },
  managerWebpack: async (config) => {
    config.plugins = [...config.plugins, new NodePolyfillPlugin()];

    return config;
  },
};
