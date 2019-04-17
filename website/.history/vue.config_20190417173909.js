// vue.config.js
const path = require('path');
module.exports = {
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,

    // webpack-dev-server 相关配置
    devServer: {
        proxy: {
            '/api': {
                target: 'http://test.yiedu.cc/admin/', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api/': '/'
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