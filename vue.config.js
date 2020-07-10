module.exports = {
        configureWebpack: {
            resolve: {
                alias: {
                    'assets': '@/assets',
                    'common': '@/common',
                    'components': '@/components',
                    'network': '@/network',
                    'views': '@/views',
                }
            }

        },
        devServer: {
            proxy: {
                '/api': {
                    target: 'http://172.16.2.42:8888',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/api': ''
                    }
                }
            }
        }

    }
    //   target: 'http://172.16.2.42:8888',
    //   // target: 'http://192.168.3.196:8888',