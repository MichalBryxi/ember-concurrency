'use strict';

const getChannelURL = require('ember-source-channel-url');
const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function () {
  return {
    useYarn: true,
    scenarios: [
      {
        name: 'ember-lts-3.28',
        npm: {
          devDependencies: {
            'ember-source': '~3.28.0',
          },
        },
      },
      {
        name: 'ember-lts-4.4',
        npm: {
          devDependencies: {
            'ember-source': '~4.4.0',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
          },
        },
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta'),
          },
        },
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary'),
          },
        },
      },
      {
        name: 'ember-default',
        npm: {
          devDependencies: {},
        },
      },
      {
        name: 'typescript-3.7',
        npm: {
          devDependencies: {
            '@types/node': '~16.11.7', // @types/node 17.x breaks TS 3.7
            typescript: '~3.7.0',
          },
        },
        command: 'tsc',
      },
      {
        name: 'typescript-3.9',
        npm: {
          devDependencies: {
            typescript: '~3.9.0',
          },
        },
        command: 'tsc',
      },
      embroiderSafe(),
      embroiderOptimized(),
    ],
  };
};
