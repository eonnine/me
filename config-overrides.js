const {
  override,
  disableChunk,
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
  ...addBabelPlugins(
    "react-hot-loader/babel"
  ),
)