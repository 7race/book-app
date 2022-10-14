const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@tests-utils': path.resolve(__dirname, '../src/tests-utils'),
      '@atoms': path.resolve(__dirname, '../src/view/atoms'),
      '@molecules': path.resolve(__dirname, '../src/view/molecules'),
      '@organisms': path.resolve(__dirname, '../src/view/organisms'),
      '@layout': path.resolve(__dirname, '../src/view/layout'),
      '@pages': path.resolve(__dirname, '../src/view/pages'),
      '@static': path.resolve(__dirname, '../src/view/static'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
    };
    return config;
  },
};
