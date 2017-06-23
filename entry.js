const entry = [
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

    ]
module.exports = entry;
