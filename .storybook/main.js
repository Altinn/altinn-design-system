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
    'storybook-addon-designs',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {},
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    // ----------------------------------------------------------------------
    // We need to load @storybook/addon-postcss (above in `addons`) so we can
    // perform a custom transformation of CSS `rem` values using PostCSS.
    // Unfortunately, @storybook/addon-postcss seems abandoned and buggy, and
    // it forces an outdated `css-loader` onto the webpack config. That old
    // version breaks CSS module classnames, so we patch it here to a mor
    // current version. We should be able to remove this mess (CSS rewriting,
    // @storybook/addon-postcss, monkey-patching) once the dependency on the
    // old Altinn design system is removed and `rem` values no longer need
    // rewriting.

    const cssRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('test.css'),
    );

    if (cssRule) {
      const cssLoader = cssRule.use.find(
        (use) => use.loader && /css-loader/.test(use.loader),
      );

      if (cssLoader) {
        logger.info(
          'Monkey-patching css-loader version forced by @storybook/addon-postcss',
        );
        cssLoader.loader = require.resolve('css-loader');
        cssLoader.options = {
          modules: {
            auto: true,
            localIdentName: '[local]---[hash:base64:5]',
          },
        };
      }
    }

    // ----------------------------------------------------------------------

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
