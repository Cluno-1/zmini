const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "${path.resolve(__dirname, 'node_modules/uview-plus/theme.scss')}";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'uview-plus': path.resolve(__dirname, 'node_modules/uview-plus')
      }
    }
  }
}