const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = path;
const entry = require('./entry');

module.exports = {
    context: resolve(__dirname, 'src'),
    entry,
    output: {
        path: path.join(__dirname,'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
        {
            test: /\.jsx?$/,
            use: [ 'babel-loader' ],
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },
        {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        },
        {
            test: /\.hbs$/,
            loader: "handlebars-loader"
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    devServer: {
        hot: true,
        // 开启服务器的模块热替换（HMR）
        contentBase: resolve(__dirname, 'dist'),
        // 输出文件的路径

        publicPath: '/'
        // 和上文 output 的“publicPath”值保持一致
    },
    externals: {
      react: 'var React',
      'react-dom': 'var ReactDOM'
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
          title: 'react-demo',
          template: 'template/index.hbs'
        }), // html模板
        new webpack.HotModuleReplacementPlugin() //增加：webpack热替换插件
    ],
    devtool: 'cheap-module-source-map'
};
