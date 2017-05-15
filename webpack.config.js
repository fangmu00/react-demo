const webpack = require('webpack');
const WebpackDevServer = require("webpack-dev-server");
const path = require('path');
const { resolve } = path;

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: [
        'react-hot-loader/patch',
        // 开启 React 代码的模块热替换(HMR)

        'webpack-dev-server/client?http://localhost:8080',
        // 为 webpack-dev-server 的环境打包代码
        // 然后连接到指定服务器域名与端口

        'webpack/hot/only-dev-server',
        // 为热替换(HMR)打包好代码
        // only- 意味着只有成功更新运行代码才会执行热替换(HMR)


        './app/app.js'
        // 我们 app 的入口文件
        
    ],
    output: {
        path: path.join(__dirname,'dist'),
        filename: '[name].js',
        publicPath: '/',
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
            use: [ 'style-loader', 'css-loader?modules' ],
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
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
            // 该配置假定你引入的 vendor 存在于 node_modules 目录中
            return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.HotModuleReplacementPlugin() //增加：webpack热替换插件
    ],
    devtool: 'inline-source-map',
}; 