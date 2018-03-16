const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 分离css
const { resolve } = path;

module.exports = {
    entry: [
        'react-hot-loader/patch',
        // 开启 React 代码的模块热替换(HMR)

        './app/app.js'
        // 我们 app 的入口文件

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
      }]
    },
    devServer: {
        hot: true,
        host: '127.0.0.1',
        // 开启服务器的模块热替换（HMR）
        contentBase: resolve(__dirname, 'dist'),
        // 输出文件的路径

        publicPath: '/'
        // 和上文 output 的“publicPath”值保持一致
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
            // 该配置假定你引入的 vendor 存在于 node_modules 目录中
            return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new HtmlWebpackPlugin({
          template: 'template/index.html'
        }), // html模板
        new webpack.HotModuleReplacementPlugin(), //增加：webpack热替换插件
        new ExtractTextPlugin('style.css')
    ],
    devtool: 'inline-source-map'
};
