<template>
	<div class="main_page">
		<h1>细说一个月建站然后托管github的过程</h1>
		<h2 >
			虽然本站只有前端部分内容(主要是博主想走前端，而且技术力不高),但是真的要折腾起来，一堆bug不知道怎么解决，
			建站的过程痛并快乐着，最后上线的成就感真的高！
		</h2>
		<h5 style="text-align: right;">本文更新于2022.07.15</h5>
		<hr />
		
		<h3>第一步：写好自己的网站代码</h3>
		<h5>
			博主使用的是Vue3 + JS的组合,写代码一堆Bug加上查找各种资料，资料有的少，有的已经不管用，相信写过代码的人都懂。
			下图是博主的博客代码目录结构
		</h5>
		<img style="width: 20%;" src="../../assets/building/catalog.png">
		<h3>第二步：为了让别人访问我的网站，我踩过哪些坑？</h3>
		<h5>
			经过上一步的毒打之后，本以为能安稳上线，但是并不！
		</h5>
		<p>
			(1)本来自己写完代码，想直接扔到静态页面代理的网站，让这些网站把域名、服务器啥的都帮你搞定，试过了阿里云和腾讯云的服务
			体积小一点简单点的项目还行，个人博客如果太复杂，像博客的小站一堆能跑的Bug，而且因为用了一堆图片和动画资源，所以体积异常的大(足足一个g)
			放上去后，就总是在部署的某个阶段出问题。比如我用腾讯云的webify,打包时超过100M不让部署，而且路径也有问题无法访问。同时webify的提供域名非常长。
		</p>	
		<p>
			(2)先试试能不能上线让别人能远程打开，再考虑域名！有些帖子会先叫你准备域名，准备服务器，做XXX的，等到最后一步再上线。我觉得其实对我这种半学生党(刚刚毕业没多久)
			来说是不太理想的流程做法。等到最后一步，怎么也解决不了的时候，前面做那么多就卡最后一个脖子。而且用代理的话，可以先不考虑域名服务器，代理的网站
			可以先给你提供这些，等你后续稳定了之后可以再挪到服务器，使用域名。所以要先试试能不能跑，别什么都做完了再试，一堆BUG改到你窒息！		
		</p>	
		
		<h3>第三步：怎么让别人顺利访问到我写的网页呢？</h3>
		<h5>
			这里只写博主个人经历，不一定适用，大家可以去网上找完整的教程(注意！一定要完整的过程，不然有些地方忽略了，只说重要的部分
			，那么到时候出问题还是自己受苦，博主找的帖子找了很多找了很久，这里就不方便列举了)
		</h5>
		<p>
			(1)这里只讲述博主个人运行成功的流程，其他的坑就少踩吧，使用的是
			<font style="color: #1313c5;font-weight: bold;">github的xxx.github.io</font>这种方式托管个人网站
		</p>
		<p>
			(2)首先，要准备好自己的项目，在运行npm run build打包构建整个项目之前，要准备好配置。
			博主用的是VueCli脚手架搭建的，所以没有Build和Config目录，所以自建了一共vue.config.js文件用来装基本的配置。
			图中红圈的部分是核心，注意publicPath:"./"有的
			帖子会说写的publicPath:"/"，个人建议用
			<font style="color: #ce0600;font-weight: bold;">publicPath:"./"</font> 表示根目录，
			然后下面一个outputDir:"dist"是指打包后输出的文件夹为dist，dist里面装了你整个项目的打包结果。
			
		</p>
		<img style="width: 50%;" src="../../assets/building/config.png">
		
		<p>
			(3)然后，找到<font style="color: #ce0600;font-weight: bold;">.gitignore</font>文件，这个文件实际上是选择忽略
			哪部分文件不上传，里面默认不上传node_modules和dist，即一些node模块和我们即将要生成打包文件
			(当然如果没有/dist，我个人怀疑是没有npm run build打包所以才没有出现，可以先试着运行npm run build打包出dist)。删除掉
			里面的<font style="color: #ce0600;font-weight: bold;">/dist</font>代码，表示不忽略并且上传dist到github
	
		</p>
		<p>
			(4)然后，在github新建一个仓库，New Repository，建仓库的名字要用自己的用户名 + github.io来写，User.github.io，
			比如我的就是MouthHard.github.io，下面有个是否添加一个readme.md来帮助别人了解，我个人很想加，但是之前加readme.md
			会和原来我项目中的readme.md冲突，而且删除之后不能解决冲突，搞得我重建了好几次仓库，我个人是不建议添加的。
			建完之后，回到项目的根目录下，右键git bush here，(没有说明没有安装git或者安装不成功，可以去参考教程
			https://blog.csdn.net/mukes/article/details/115693833)，在根目录下打开git的操作界面
		</p>
	</div>
</template>

<script>
export default {
}
</script>
<style scoped src="../../assets/study_page.css"></style>
<style scoped lang="scss">
	.main_page img{
		width: 90%;
	}
	.main_page img:hover{
		transform: scale(1.5);
		transition: 1s;
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

</style>


