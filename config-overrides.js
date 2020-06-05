const {
  override,
  disableChunk,
  addBabelPlugins,
  fixBabelImports,
  addWebpackAlias,  addLessLoader
} = require('customize-cra');

module.export = override(
  disableChunk(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  ...addBabelPlugins(
    "react-hot-loader/babel"
  ),
  addWebpackAlias({
    'react-dom': '@hot-loader/react-dom'
  }),
)