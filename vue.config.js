const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint校验.
  devServer: {
    // proxy: {
    //     ws: false, // 添加该配置以支持 WebSocket 代理
       
    // },


    // https: true,
    client: {
      overlay: {
        warnings: false, //不显示警告
        errors: false	//不显示错误
      },
    }
  },
  lintOnSave:false //关闭eslint检查

})
