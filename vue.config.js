module.exports = {
    devServer: {
        proxy: {
            '/translate': {
                target: 'http://api.fanyi.baidu.com/api/trans/vip/translate',//后端接口地址
                changeOrigin: true,//是否允许跨越
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}