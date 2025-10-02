// vue.config.js  只保留 alias 即可
const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'uview-plus': path.resolve(__dirname, 'node_modules/uview-plus')
      }
    }
  }
}