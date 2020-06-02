const {resolve } = require('path')
const {
  override,
  disableChunk,
  addWebpackAlias,
  addBabelPlugins,
  fixBabelImports
} = require('customize-cra')

module.export = override(
  disableChunk(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addWebpackAlias({
    '@': resolve(__dirname, './src'),
    '@styles': resolve(__dirname, './src/styles'),
    '@components': resolve(__dirname, './src/components')
  }),
  ...addBabelPlugins(
    "react-hot-loader/babel"
  ),
)