// vue.config.js
const path = require('path');
module.exports = {
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',
    // webpack-dev-server 相关配置
    devServer: {
        proxy: {
            // port: 8080,
            // host: 'localhost',
            // https: false,
            // open:true,
            '/api': {
                target: 'http://ybtest1.uicp.top/api', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''   // 替换target中的请求地址，也就是说，在请求的时候
                }
            }
        }
    },
    // 用来配置less的全局变量
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/assets/global.less')
            ]
        }
    }
}