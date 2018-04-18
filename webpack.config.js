const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 分离css

module.exports = function(env) {
  return merge(
    {
      context: __dirname,
      entry: {
        index: './src/app/app.js'
      },
      output: {
          path: path.join(__dirname,'dist'),
          filename: '[name].js',
          publicPath: '/'
      },
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
      resolve: {
        extensions: ['.js', '.jsx', '.json']
      },
      externals: {
        react: 'var React',
        'react-dom': 'var ReactDOM',
        redux: 'var Redux',
        'react-redux': 'var ReactRedux',
        'react-router-dom': 'var ReactRouterDOM'
      },
      plugins: [
        new HtmlWebpackPlugin({
        template: './src/template/index.html'
        }), // html模板
        new ExtractTextPlugin('style.css')],
    },
    require(`./webpack.${env}.js`)
  );
}
