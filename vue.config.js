module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000/login', //对应自己的接口
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }