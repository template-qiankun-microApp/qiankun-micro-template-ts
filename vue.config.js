const name = require('./package.json').name

module.exports = {
  publicPath: '//localhost:10001/',
  configureWebpack: {
    output: {
      library: 'vue2app',
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    },
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      port: 10001,
      disableHostCheck: true,
      historyApiFallback: true,
      sockPort: 10001,
      sockHost: 'localhost'
    }
  }
}
