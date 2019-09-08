const { addBabelPlugin, override } = require('customize-cra'); //eslint-disable-line

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);
