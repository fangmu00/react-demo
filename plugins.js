const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const path = require('path');
const content = path.resolve(__dirname, 'src');
const files = glob.sync(content+'/htmls/*.html');
// 插件配置
const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function (module) {
      // 该配置假定你引入的 vendor 存在于 node_modules 目录中
      return module.context && module.context.indexOf('node_modules') !== -1;
    }
  }),
  new HtmlWebpackPlugin({
    chunks: [
      'main',
      'vendor'
    ],
    title: 'react-demo',
    template: 'template/index.hbs'
  })
];
// html插件配置生成
files.forEach((item) => {
  const name = /.*\/htmls\/(.*?).html/.exec(item)[1];
  plugins.push(
    new HtmlWebpackPlugin({
      chunks: [
        'main',
        'vendor',
        name
      ],
      filename: name+'.html',
      template: item
    })
  );
});


module.exports = plugins;
