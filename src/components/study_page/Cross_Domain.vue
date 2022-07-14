<template>
	<div class="main_page">
		<h1>使用echarts的3d图形涉及到的跨域问题</h1>
		<h2 >
			使用echarts因为想搞得炫酷一点，用了3d地球，里面涉及的渲染的图片路径问题要求跨域
		</h2>
		<h5 style="text-align: right;">本文更新于2022.07.12</h5>
		<hr />
		
		<h3>具体是这样的：</h3>
		<h5>
			首先官方提供的写法，虽然完整代码是这样：
		</h5>
		<img src="../../assets/cross-domain_error/official_written.png">
		<h5>
			但是，如果直接在本地不修改直接贴上去，那么会报错,根据翻译和大佬解释，应该是本地localhost直接去访问其他域时要进行
			<font style="color: red;">跨域，</font>
			而我没有做跨域的处理，所以就会报错
		</h5>
		<img src="../../assets/cross-domain_error/cross_error.png">
		
		<h5 style="color: #2d43bf;">
			我之前想(然后我这个思路马上被打脸)：既然拉取网络上的图片不行，那我下载好了然后在本地自己调用可不可以呢？。
		</h5>
		<img style="width: 30%;"  src="../../assets/cross-domain_error/download.png">
		<h5 style="color: #2d43bf;">
			修改原先的路径，然后去试试。
		</h5>
		<img style="width: 40%;" src="../../assets/cross-domain_error/localA.png">
		<h5 style="color: #2d43bf;">
			URL改成我项目中的路径。
		</h5>
		<img style="width: 40%;"  src="../../assets/cross-domain_error/localB.png">
		<h5 style="color: darkred;">
			结果不行，貌似echarts的上面圈住的这几个属性都是只接收网络URL，不接受本地路径？
		</h5>
		<img  src="../../assets/cross-domain_error/local_error.png">
		<h5 >
			于是考虑大佬的建议：用代理跨域去解决。那我的项目是Vue3，那么Vue3对应的是Proxy代理
			(Vue2好像也有个类似的Object.defineProperty被Vue3的Proxy替换了，具体的优缺点各位看官可以自行去百度)
			借用李木子大佬的写法
		</h5>
		<img style="width: 40%;" src="../../assets/cross-domain_error/proxy.png">
		<h5 >
			具体做法是在根目录下新建一个vue.config.js,如果原本有可以不新建(我每次用Cli脚手架建都没有，都要自己建)
		</h5>
		<img style="width: 30%;" src="../../assets/cross-domain_error/vueConfig.png">
		
		<h5 >
			然后按照上面里面大佬的写法，直接敲代码就行，其中最外层大红圈圈中的部分就是核心，
			外面的module.export虽然不是核心，但也很重要，我个人理解是将module写的代码包装好然后开放导出让其他文件调用
			(之前我比较笨，每个文件都用一个module.export{}，后来大佬讲解才意识到，太多的module后对打包配置不友好)
			<br>
			注意代码中的
			<font style="color: red;">host </font>
			和 <font style="color: red;">port</font> 
			是你当前本地的主机和 主机端口(我个人是localhost:8080,
			之前看过一篇文章说127.0.0.1和localhost不是同一个东西，虽然意义差不多，但是写127.0.0.1:8080会报错，
			我没有试过，感兴趣的朋友可以去试试然后找出原因，加油)
			<br>
		</h5>
		<img style="width: 60%;" src="../../assets/cross-domain_error/cross.png">
		<h5>
			而<font style="color: red;">target</font>则是你要跨域的目标，就是你想访问的哪个URL需要你跨域你就写上去
			这里有个小坑,假如你要访问同一个地址的多个文件，需要把target写成多个文件最长的公共前缀，比如访问A,B文件，
			http://xxx/a.jpg 和 http://xxx/b.jpg，那么target = "http://xxx"，等要需要的时候在拼接
			<br>
			图中的<font style="color: red;">"/api"</font>则是替换了<font style="color: red;">"http://xxx"</font>
		</h5>
		<img style="width: 60%;" src="../../assets/cross-domain_error/linkURL.png">
		<h5>
			比如我在另一个vue文件中写，图中的地址就是前面的<font style="color: red;">'/api'</font>拼接上后面的字符串
			<font style="color: red;">'world.topo.bathy.200401.jpg'(我要拿到的图)</font>	
		</h5>
		<img style="width: 60%;" src="../../assets/cross-domain_error/linkExample.png">
		<h5>
			最后大家一定要上网检查一下自己写的是不是对的，还要检查一下路径是否正确，
			不然吃大亏(说的就是我),出现404找不到资源之类的错误
		</h5>
		<img style="width: 60%;" src="../../assets/cross-domain_error/error.png">
		<h5>
			最后，说一下我在HBuilderX + Vue3 + JS的项目中遇到的一个问题，
			如果不是用HBuildeX的同学可以不看， 我个人是比较喜欢HBbuildeX的风格，
			而且代码提示也人性化(适合我们这种年轻的老年人的金鱼记忆、眼蒙手慢)。
			说回正题，因为HbuilderX每次只要保存就会自动帮你更新页面，这点我觉得很舒服(据说VsCode也有，但是我安装VS的东西都很卡
			，无论是Visual Stadio还是和VsCode都能让我电脑跑起来很卡很慢，所以我就转头用HbuilderX了)
			然后问题就是，像我写一些比较大的变动的代码时，比如我上面解决的跨域问题，HbuilderX是整个不给你更新的，
			搞得我弄了半天想到底哪里出问题，看了一上午的解决方案没有思路，然后就觉得关掉所有东西重开
			发现就突然能跑了。我不知道其他编辑器有没有这个问题，个人觉得这种地方还是让我不太舒服(没有骂的意思，吐槽一下,狗头保命(doge))
		</h5>
		<h5 style="color: #368800;">
			跑通了，yes!还有给各位提个建议，别像我一样，写个博客搞这么花里胡哨，不然卡到你电脑冒烟！博客是写自己喜欢的东西的地方，如果觉得改bug改的心烦，
			不想继续搞，可以放弃太复杂的页面，搞个简单能放文字的地方就行，当然你不介意麻烦，可以像我一样，把自己喜欢的东西无论多繁杂都加进去,
			反正卡的是我的电脑和看我博客的人(别打了！别打我)
			
		</h5>
		<img style="width: 80%;" src="../../assets/cross-domain_error/finish.png">
		<h5>
			上述问题答案可能有疏漏，遇到不明白的可以来问我哦(我的联系方式在"红警"界面显示器右侧几个小方格里面),我会把我知道的部分告诉你
		</h5>
		<img style="width: 30%;" src="../../assets/cross-domain_error/contact.png">
	</div>
</template>

<script>
export default {
}
</script>
<style scoped lang="scss">
	.main_page{
		position: absolute;
		width: 84%;
		top: 100%;
		left: -8%;
		font-size: 1rem;
		color: #000000;
		background: radial-gradient(circle,#cbcbcb,#eeeeee,#ffffff);
		padding-left: 1rem;
		padding-right: 1rem;
		border-top: 0.8rem double #5f93af;
	}
	.main_page img{
		width: 90%;
	}
	.main_page img:hover{
		transform: scale(1.5);
		transition: 1s;
	}
	.main_page h1{
		font-family: STXingkai;
	}
	.main_page h2{
		font-size: 1rem;
	}
	.main_page h3{
		text-align: left;
	}
	.main_page h5{
		text-align: left;
		text-indent: 2em;
		font-size: 1rem;
	}
	.main_page p{
		text-align: justify;
		text-justify: inter-ideograph; 
		text-indent: 2rem;
		font-size: 1rem;
	}

	a:hover{
		color: #FFFFFF;
		padding: 0.5rem;
		background-color: #436f96;
		box-shadow: 0 0 20px 0px rgba(255, 255, 255, 0.8);
	}
</style>

