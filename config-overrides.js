const {
  override,
  disableChunk,
  addBabelPlugins,
  fixBabelImports,
  addWebpackAlias,
  removeModuleScopePlugin,
  addWebpackModuleRule
} = require('customize-cra');
const path = require('path');

module.export = override(
  removeModuleScopePlugin(),
  disableChunk(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addWebpackModuleRule(
    {
      test: /\.(ts|tsx)$/,
      use: 'ts-loader'
    }
  ),
  ...addBabelPlugins(
    "react-hot-loader/babel"
  ),
  addWebpackAlias({
    'react-dom': '@hot-loader/react-dom',
    'styles': path.resolve(__dirname, 'src/styles'),
    'components': path.resolve(__dirname, 'src/components'),
  }),
)