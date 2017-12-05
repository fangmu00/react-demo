const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 分离css

module.exports = {
    entry: [
        './app/app.js'
    ],
    module: {
      rules: [
      {
          test: /\.(js|jsx)?$/,
          use: [ 'babel-loader' ],
          exclude: /node_modules/
      },
      {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
      },
      {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'less-loader']
          })
      },
      {
          test: /\.hbs$/,
          loader: "handlebars-loader"
      }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
            // 该配置假定你引入的 vendor 存在于 node_modules 目录中
            return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new HtmlWebpackPlugin({
          title: 'react-demo',
          template: 'template/index.hbs'
        }), // html模板
        new ExtractTextPlugin('[name].css')
    ]
};
