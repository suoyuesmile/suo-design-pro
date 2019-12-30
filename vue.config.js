const autoprefixer = require('autoprefixer')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const pxtorem = require('postcss-pxtorem')
module.exports = {
  publicPath: process.env === 'production' ? '' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: [/\/node_modules\/vue-echarts\//, /\/node_modules\/resize-detector\//],
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end()
    config.resolve.alias.set('@', resolve('src')).set('@assets', resolve('src/assets'))
  },
  devServer: {
    historyApiFallback: true
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/assets/styles/variable.scss";
        `
      },
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  }
}
