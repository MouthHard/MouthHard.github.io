const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  //eslint严格检查代码规范
  lintOnSave: false,
  // 跨域
  //基本路径
  publicPath:"./",  
  //输出路径
  outputDir:"dist",
	//静态资源
  assetsDir:"./",
  //服务器配置
  devServer:{
	  host:"localhost",
	  port:8080,
	  open:true,//设置代理proxy
	  proxy:{
		"/api":{
			target:"https://echarts.apache.org/examples/data-gl/asset/",//跨域目标地址
			changeOrigin:true,//是否跨域
			pathRewrite:{
				//重写请求路径，http://xxx被替换为 /api
				"^/api":" ",
			}
		}
	  }
  }
})



